package bg.elsys.ip.rest;

import java.util.stream.Collectors;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@Path("/cars")
@Api("users")
public class CarResource {

	@GET
	@ApiOperation(value = "get list of cars", response = Car.class, responseContainer = "List")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getUsers(@QueryParam("page") int page) {
		CarService carService = CarService.getInstance();
		//Object obj = userService.getCars().stream().skip((page - 1) * 10)
		//		.limit(10)
		//		.collect(Collectors.toList());
		return Response.ok(carService.getCars().stream().skip((page - 1) * 10)
						.limit(10)
						.collect(Collectors.toList())).build();
	}

	@POST
	@ApiOperation(value = "create new car", response = Car.class)
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response createUser(Car car) {
		CarService.getInstance().addCar(car);

		return Response.ok(car).status(Status.CREATED).build();
	}
}
