export class ErrorCode {
    // Success code
    public static readonly NONE: number = 0;
    
    // Login
    public static readonly LOGIN_INVALID: number = 1;
    public static readonly NETWORK_ERROR: number = 2;
    public static readonly INVALID_CREDENTIALS: number = 3;
    
    // Additional error codes
    public static readonly UNKNOWN_ERROR: number = 99;

    // Add more error codes as needed...
}
