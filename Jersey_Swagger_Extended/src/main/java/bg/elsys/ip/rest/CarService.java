package bg.elsys.ip.rest;

import java.util.ArrayList;

import java.util.Collections;
import java.util.LinkedList;
import java.util.List;

public class CarService {
	private static CarService instance;

	public static CarService getInstance() {
		if (instance == null) {
			instance = new CarService();
		}
		return instance;
	}

	private List<Car> carList = new ArrayList<>();

	public CarService() {
		carList.add(new Car("volkswagen","passat","1998",110));
		carList.add(new Car("volkswagen","passat","1998",110));
		carList.add(new Car("volkswagen","passat","1998",110));


	}

	public List<Car> getCars() {
		return Collections.unmodifiableList(carList);
	}

	public void addCar(Car car) {
		carList.add(car);
	}
}
