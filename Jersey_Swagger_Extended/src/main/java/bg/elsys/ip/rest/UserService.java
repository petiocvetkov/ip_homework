package bg.elsys.ip.rest;

import java.util.ArrayList;
import java.util.Collections;
import java.util.LinkedList;
import java.util.List;

public class UserService {
	private static UserService instance;

	public static UserService getInstance() {
		if (instance == null) {
			instance = new UserService();
		}
		return instance;
	}

	private List<User> userList = new ArrayList<>();

	public UserService() {
		userList.add(new User(1, "George","Petrov",21,"green"));

	}

	public List<User> getUsers() {
		return Collections.unmodifiableList(userList);
	}

	public void addUser(User user) {
		userList.add(user);
	}
}
