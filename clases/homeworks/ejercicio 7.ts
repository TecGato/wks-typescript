function suma2(a: number | string, b: number | string): number | string |void {
    if(typeof(a) === "number" && typeof(b) ==="number") {
      return a+b;
    } else if (typeof(a) === "string" && typeof(b) ==="string") {
      return a + b
    }
}
// Logra que esta funcion tambien concatene strings