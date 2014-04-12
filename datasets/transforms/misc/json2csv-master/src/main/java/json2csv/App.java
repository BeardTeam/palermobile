package json2csv;

import au.com.bytecode.opencsv.CSVWriter;
import com.fasterxml.jackson.core.TreeNode;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.MappingJsonFactory;
import com.sampullara.cli.Args;
import com.sampullara.cli.Argument;

import java.io.*;
import java.util.ArrayList;
import java.util.List;
import java.util.StringTokenizer;

/**
 * Parse JSON and output CSV
 */
public class App {

  @Argument(alias = "s", description = "Field selectors", required = true)
  private static String[] selectors;

  @Argument(alias = "f", description = "Names of the fields")
  private static String[] fields;

  @Argument(alias = "o", description = "Name of output file")
  private static File output;

  public static void main(String[] args) throws IOException {
    List<String> files;
    try {
      files = Args.parse(App.class, args);
    } catch (IllegalArgumentException e) {
      System.err.println(e.getMessage());
      Args.usage(App.class);
      System.exit(1);
      return; // trick javac
    }

    List<BufferedReader> readers = new ArrayList<BufferedReader>();
    if (files.size() == 0) {
      readers.add(new BufferedReader(new InputStreamReader(System.in, "UTF-8")));
    } else {
      for (String file : files) {
        readers.add(new BufferedReader(new InputStreamReader(new FileInputStream(file), "UTF-8")));
      }
    }

    Writer writer;
    if (output == null) {
      writer = new BufferedWriter(new OutputStreamWriter(System.out, "UTF-8"));
    } else {
      writer = new BufferedWriter(new OutputStreamWriter(new FileOutputStream(output), "UTF-8"));
    }

    CSVWriter csvWriter = new CSVWriter(writer, ',', '"', '\"', "\n");
    int length = selectors.length;
    if (fields == null) {
      fields = new String[length];
      for (int i = 0; i < length; i++) {
        String selector = selectors[i];
        fields[i] = selector.substring(selector.lastIndexOf('.') + 1);
      }
    } else {
      if (fields.length != length) {
        throw new IllegalArgumentException("Field and selector mismatch");
      }
    }
    csvWriter.writeNext(fields);

    MappingJsonFactory jf = new MappingJsonFactory();
    for (BufferedReader reader : readers) {
      String line;
      while ((line = reader.readLine()) != null) {
        JsonNode jsonNode = jf.createParser(line).readValueAsTree();
        String[] values = new String[length];
        for (int i = 0; i < length; i++) {
          String selector = selectors[i];
          values[i] = apply(jsonNode, selector);
        }
        csvWriter.writeNext(values);
      }
    }
    csvWriter.close();
  }

  private static String apply(JsonNode jsonNode, String selector) {
    String value;
    StringTokenizer st = new StringTokenizer(selector, ".");
    while (st.hasMoreTokens() && jsonNode != null && !jsonNode.isNull()) {
      String token = st.nextToken();
      jsonNode = jsonNode.get(token);
    }
    if (jsonNode == null || jsonNode.isNull()) {
      value = "";
    } else {
      value = jsonNode.asText();
    }
    return value;
  }
}
