package bg.elsys.ip.rest;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

@ApiModel
public class User {
	
	@ApiModelProperty(required = true)
	private int id;
	@ApiModelProperty(value = "This will show the name of the user", example = "Pesho")
	private String firstName;
	private String lastName;
	private int age;
	private String eyeColor;
	

	public User() {
	}

	public User(int id, String firstName,String lastName,int age, String eyeColor) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
		this.eyeColor = eyeColor;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return firstName;
	}

	public void setName(String name) {
		this.firstName = name;
	}

}