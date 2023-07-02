export class User {
    constructor(
      private email: string,
      private id: string,
      private _token: string,
      private _tokenExpression: Date
    ) {}
  
    // getToken() {
    //   if (!this._tokenExpression || new Date() > this._tokenExpression) {
    //     return null;
    //   }
    //   return this._token;
    // }
  
    get token() {
      if (!this._tokenExpression || new Date() > this._tokenExpression) {
        return null;
      }
      return this._token;
    }
  }
  