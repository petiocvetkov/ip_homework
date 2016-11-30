package bg.elsys.ip.rest;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

@ApiModel
public class Car {
	
	
	@ApiModelProperty(value = "This will show the name of the user", example = "Pesho")
	private String mark;
	
	private String model;
	
	private String year;
	
	private String HorsePower;

	public Car() {
	}

	public Car(String mark, String model, String Year, String HorsePower) {
		super();
		this.mark = mark;
		this.model = model;
		this.year = Year;
		this.HorsePower = HorsePower;

	}


	public String getMark() {
		return mark;
	}

	public void setMark(String name) {
		this.mark = name;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

	public String getYear() {
		return year;
	}

	public void setYear(String year) {
		this.year = year;
	}

	public String getHorsePower() {
		return HorsePower;
	}

	public void setHorsePower(String horsePower) {
		HorsePower = horsePower;
	}

}
