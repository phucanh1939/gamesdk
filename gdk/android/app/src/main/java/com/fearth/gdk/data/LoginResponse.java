package com.fearth.gdk.data;

public class LoginResponse {
    public boolean success = false;
    public int errorCode = 0;
    public String userId = null;
    public String token = null;

    public static LoginResponse error(int errorCode) {
        LoginResponse response = new LoginResponse();
        response.errorCode = errorCode;
        return response;
    }
}
