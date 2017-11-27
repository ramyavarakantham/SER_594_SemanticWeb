import com.fasterxml.jackson.annotation.JsonProperty;

public class Response {
	
	@JsonProperty(required = true)
	private String value;

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}
	
	

}
