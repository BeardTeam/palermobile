package net.iubris.appalermo.model;


import java.util.List;

import javax.xml.bind.annotation.XmlList;
import javax.xml.bind.annotation.XmlRootElement;

import org.apache.commons.lang.builder.ReflectionToStringBuilder;
import org.simpleframework.xml.ElementList;
import org.simpleframework.xml.Root;


@Root(name="palermo-opendata")
@XmlRootElement
public class PalermoOpendata {

	@ElementList
//	@XmlElement
	@XmlList
	private List<Luogo> luoghi;

	@Override
	public String toString() {
		return ReflectionToStringBuilder.toString(this);
	}
}
