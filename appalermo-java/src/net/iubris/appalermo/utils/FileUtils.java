package net.iubris.appalermo.utils;

import java.io.FileWriter;
import java.io.IOException;
import java.nio.ByteBuffer;
import java.nio.charset.Charset;
import java.nio.file.Files;
import java.nio.file.Paths;

public class FileUtils {

	public static String readFile(String path, Charset encoding) throws IOException {
	  byte[] encoded = Files.readAllBytes(Paths.get(path));
	  return encoding.decode(ByteBuffer.wrap(encoded)).toString();
	}

	public static void writeToFile(String jsonAsString, String jsonFileName) throws IOException {
	    FileWriter fw = new FileWriter(jsonFileName);
	    fw.write(jsonAsString);
	    fw.close();
	}

}
