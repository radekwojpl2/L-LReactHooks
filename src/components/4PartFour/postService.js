import { catchError, switchMap, delay } from "rxjs/operators";
import { fromFetch } from "rxjs/fetch";
import { of } from "rxjs";

const baseUrl = "http://localhost:3000";

function getAllPosts() {
  return fromFetch(`${baseUrl}/posts`).pipe(
    switchMap((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return of({ error: true, message: `Error ${res.status}` });
      }
    }),
    delay(2000),
    catchError((err) => {
      return of({ error: true, message: err.message });
    })
  );
}

export { getAllPosts };
