package autotest;

import io.restassured.http.ContentType;
import io.restassured.response.Response;
import org.json.JSONException;
import org.json.JSONObject;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.io.File;

import static io.restassured.RestAssured.given;

public class RestTest {

    String baseUrl = "http://localhost:8081";

    @Test
    public void getTest() {
        Response response = given()
                .baseUri(baseUrl)
                .contentType(ContentType.JSON)
                .when().get("/")
                .then().log().all()
                .extract().response();
        Assertions.assertEquals(200, response.getStatusCode());
    }

    @Test
    public void postTest() throws JSONException {

        JSONObject requestParams = new JSONObject();
        requestParams.put("title", "TQ123");
        requestParams.put("text", "9781449325862");

        Response response = given()
                .baseUri(baseUrl)
                .contentType(ContentType.JSON)
//                .body(new File("src/test/resources/post.json"))
                .body(requestParams.toString())
                .post("/add")
                .then()
                .log().body()
                .extract().response();
        Assertions.assertEquals(200, response.getStatusCode());
    }
}
