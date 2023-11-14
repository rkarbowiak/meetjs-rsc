---
theme: default
class: text-left
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: slide-left
title: Welcome to Slidev
mdc: true
selectable: true
---

# It's evolving, just backwards?

Zanurkujmy w React Server Components

<div class="flex flex-row align-center gap-4 abs-bl m-6 ml-14"> 
  <div class="flex flex-col"> 
    <span>Radosław Karbowiak</span> 
    <span class="text-sm text-zinc-400">Full Stack Developer</span> 
     <svg alt="Gorrion's logo" class="Headercomponents__StyledLogo-sc-16gu2kx-0 ekjHzm" width="100" preserveAspectRatio="xMinYMid" height="38" viewBox="0 0 147 38" fill="none"><path class="logo_letter" d="M56.0017 26.8551C56.4617 28.0851 58.0067 29.0051 59.3817 29.0051C62.0467 29.0051 63.2767 27.4301 63.0767 24.2501C62.4767 25.4251 60.7867 26.2001 59.0667 26.2001C57.2617 26.2001 55.7167 25.5401 54.3667 24.2501C53.0517 22.9601 52.3867 21.3001 52.3867 19.2651C52.3867 17.2001 53.0467 15.5101 54.3667 14.2201C55.7117 12.9051 57.2617 12.2451 59.0667 12.2451C60.7867 12.2451 62.4167 13.0201 63.0767 14.1951V12.5351H66.9467V24.0551C66.9467 29.7001 64.2267 32.5951 59.3817 32.5951C56.4317 32.5951 53.9367 30.9601 52.7917 28.4401L56.0017 26.8551ZM59.7567 16.0251C58.0067 16.0251 56.5467 17.3401 56.5467 19.1751C56.5467 21.1251 58.0067 22.4401 59.7567 22.4401C60.6167 22.4401 61.3617 22.1251 62.0217 21.5251C62.6817 20.8951 62.9967 20.1201 62.9967 19.1751C62.9967 17.2551 61.5067 16.0251 59.7567 16.0251Z" fill="currentColor" style="translate: none; rotate: none; scale: none; transform-origin: 0px 0px; opacity: 1; visibility: inherit;" data-svg-origin="52.38669967651367 12.245100021362305" transform="matrix(1,0,0,1,0,0)"></path><path class="logo_letter" d="M76.7436 26.1349C74.7936 26.1349 73.1586 25.5049 71.8136 24.2149C70.4686 22.9249 69.8086 21.2349 69.8086 19.1699C69.8086 17.1049 70.4686 15.4449 71.8136 14.1549C73.1586 12.8649 74.7936 12.2349 76.7436 12.2349C78.6936 12.2349 80.3236 12.8649 81.6736 14.1549C83.0236 15.4449 83.7086 17.1049 83.7086 19.1699C83.7086 21.2349 83.0186 22.9249 81.6736 24.2149C80.3286 25.5049 78.6936 26.1349 76.7436 26.1349ZM79.7836 19.1749C79.7836 17.4299 78.4386 16.1399 76.7486 16.1399C75.0586 16.1399 73.7386 17.4299 73.7386 19.1749C73.7386 21.0099 75.0586 22.2399 76.7486 22.2399C78.4636 22.2399 79.7836 21.0099 79.7836 19.1749Z" fill="currentColor" style="translate: none; rotate: none; scale: none; transform-origin: 0px 0px; opacity: 1; visibility: inherit;" data-svg-origin="69.80860137939453 12.234899520874023" transform="matrix(1,0,0,1,0,0)"></path><path class="logo_letter" d="M90.5517 25.9102H86.5667V12.5252H90.5517V15.7652C91.2117 13.4452 92.8166 12.2402 94.3316 12.2402C95.2217 12.2402 95.9666 12.4102 96.6266 12.7252L95.9117 16.3052C95.3667 16.0452 94.6816 15.9052 93.8766 15.9052C91.6716 15.9052 90.5517 17.6802 90.5517 21.2352V25.9102Z" fill="currentColor" style="translate: none; rotate: none; scale: none; transform-origin: 0px 0px; opacity: 1; visibility: inherit;" data-svg-origin="86.56669616699219 12.24020004272461" transform="matrix(1,0,0,1,0,0)"></path><path class="logo_letter" d="M102.669 25.9102H98.6836V12.5252H102.669V15.7652C103.329 13.4452 104.934 12.2402 106.449 12.2402C107.334 12.2402 108.084 12.4102 108.744 12.7252L108.024 16.3052C107.479 16.0452 106.794 15.9052 105.989 15.9052C103.784 15.9052 102.664 17.6802 102.664 21.2352V25.9102H102.669Z" fill="currentColor" style="translate: none; rotate: none; scale: none; transform-origin: 0px 0px; opacity: 1; visibility: inherit;" data-svg-origin="98.68360137939453 12.24020004272461" transform="matrix(1,0,0,1,0,0)"></path><path class="logo_letter" d="M115.212 7.57C115.212 8.86 114.122 9.92 112.777 9.92C111.402 9.92 110.282 8.86 110.282 7.57C110.282 6.28 111.402 5.25 112.777 5.25C114.127 5.25 115.212 6.28 115.212 7.57ZM114.757 12.525V25.91H110.802V12.525H114.757Z" fill="currentColor" style="translate: none; rotate: none; scale: none; transform-origin: 0px 0px; opacity: 1; visibility: inherit;" data-svg-origin="110.28199768066406 5.25" transform="matrix(1,0,0,1,0,0)"></path><path class="logo_letter" d="M124.552 26.1349C122.602 26.1349 120.972 25.5049 119.622 24.2149C118.272 22.9249 117.617 21.2349 117.617 19.1699C117.617 17.1049 118.277 15.4449 119.622 14.1549C120.967 12.8649 122.602 12.2349 124.552 12.2349C126.502 12.2349 128.137 12.8649 129.482 14.1549C130.827 15.4449 131.517 17.1049 131.517 19.1699C131.517 21.2349 130.832 22.9249 129.482 24.2149C128.132 25.5049 126.502 26.1349 124.552 26.1349ZM127.592 19.1749C127.592 17.4299 126.242 16.1399 124.552 16.1399C122.862 16.1399 121.542 17.4299 121.542 19.1749C121.542 21.0099 122.862 22.2399 124.552 22.2399C126.272 22.2399 127.592 21.0099 127.592 19.1749Z" fill="currentColor" style="translate: none; rotate: none; scale: none; transform-origin: 0px 0px; opacity: 1; visibility: inherit;" data-svg-origin="117.61699676513672 12.234899520874023" transform="matrix(1,0,0,1,0,0)"></path><path class="logo_letter" d="M138.355 25.9102H134.375V12.5252H138.355V14.4752C139.075 13.1302 140.65 12.2402 142.225 12.2402C145.32 12.2402 147.125 14.1602 147.125 17.9152V25.9102H143.14V18.7752C143.14 17.0552 142.225 16.1102 140.82 16.1102C139.185 16.1102 138.355 17.0252 138.355 18.8352V25.9102Z" fill="currentColor" style="translate: none; rotate: none; scale: none; transform-origin: 0px 0px; opacity: 1; visibility: inherit;" data-svg-origin="134.375 12.24020004272461" transform="matrix(1,0,0,1,0,0)"></path><g class="logo_bird" style="translate: none; rotate: none; scale: none; transform-origin: 0px 0px;" data-svg-origin="18.917499542236328 18.920000076293945" transform="matrix(1,0,0,1,0,0)"><path d="M18.9213 18.0554C20.1031 18.0554 21.0613 17.0973 21.0613 15.9154C21.0613 14.7335 20.1031 13.7754 18.9213 13.7754C17.7394 13.7754 16.7812 14.7335 16.7812 15.9154C16.7812 17.0973 17.7394 18.0554 18.9213 18.0554Z" stroke="currentColor" stroke-miterlimit="10"></path><path d="M18.9213 18.0554C20.1031 18.0554 21.0613 17.0973 21.0613 15.9154C21.0613 14.7335 20.1031 13.7754 18.9213 13.7754C17.7394 13.7754 16.7812 14.7335 16.7812 15.9154C16.7812 17.0973 17.7394 18.0554 18.9213 18.0554Z" fill="currentColor"></path><path d="M37.835 19.17C37.7 29.505 29.285 37.84 18.92 37.84C8.47 37.84 0 29.37 0 18.92C0 8.47 8.47 0 18.92 0C29.165 0 37.505 8.14 37.83 18.305L30.345 13.86C28.405 9.48 24.02 6.425 18.92 6.425C12.02 6.425 6.43 12.02 6.43 18.915C6.43 25.815 12.025 31.405 18.92 31.405C23.78 31.405 27.99 28.63 30.055 24.575H28.06C25.075 24.575 22.655 22.155 22.655 19.17H37.835Z" fill="currentColor"></path></g></svg>
  </div>
 
</div>

<div class="abs-br m-6 flex gap-2">
  <a href="https://github.com/rkarbowiak" target="_blank" alt="GitHub" title="Open in GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
  <a href="https://www.linkedin.com/in/radoslaw-karbowiak/" target="_blank" alt="Linkedin" title="Open in Linkedin"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-linkedin />
  </a>
</div>

---
layout: center
---

<iframe src="https://php-lambo.vercel.app/" class="w-screen h-screen"/>

---
layout: default
---

# Agenda

<div class="flex flex-col justify-between h-11/12">
  <ul>
    <li>Wprowadzenie</li>
    <li>Czym są React Server Components? </li>
    <li>W jaki sposób mają nam pomóc?</li>
    <li>Przykłady</li>
    <li>Zalety i wady</li>
    <li>Podsumowanie</li>
  </ul>

  <div> PS: Na prezentacji będziemy używać Next.js </div>
</div>

--- 
layout: center
---

## Czemu Next.js?

<img src="/images/image-4.png" alt="Next.js" class="w-1/2 mt-5" />

<a href="https://react.dev/learn/start-a-new-react-project#bleeding-edge-react-frameworks"> Źródło </a>



--- 
layout: default
---


## Zobaczmy jak przebiega renderowanie po stronie klienta

![Alt text](/images/image-2.png)

<ul class="abs-bl text-sm m-6">
  <li>TTI - Time To Interactive</li>
  <li>FCP - First Contentful Paint</li>
  <li>LCP - Largest Content Paint</li>
</ul>

<!-- 
FCP - First Contentful Paint – kolejny wskaźnik, który mierzy ilość czasu, jaką zajmuje przeglądarce załadowanie pierwszego contentu na stronie www (obrazka, treści lub video).
TTI - Time to Interactive – wskaźnik mierzący ilość czasu, która upływa od załadowania strony internetowej do chwili uzyskania możliwości wprowadzenia danych w serwisie. 
LCP – Largest Contentful Paint – wyrenderowanie treści. Wskaźnik LCP pokazuje szybkość ładowania serwisu. Mierzy się ją, jako czas potrzebny przeglądarce do załadowania największego elementu na stronie internetowej 
-->

--- 
layout: center
---

## Minusy 

- Google nie zaindeksuje naszej strony
- Dużo zapytań do serwera
- Bundle JS musi być pobrany i uruchomiony, duży wpływ wielkości bundle'a na czas ładowania
- Utrudnione cache'owanie

--- 
layout: default
---

## Może by tak renderować po stronie serwera?



![Alt text](/images/image.png)
<ul class="abs-bl text-sm m-6">
  <li>TTI - Time To Interactive</li>
  <li>FCP - First Contentful Paint</li>
  <li>LCP - Largest Content Paint</li>
</ul>
---
layout: default
---

## Przecież to już jest możliwe!

```jsx {all} {lines:true}
export async function getServerSideProps() {
  const res = await fetch('/users')
  const users = await res.json()
  return { props: { users } }
}
 
export default function Page({ users }) {
  return <UsersList users={users} />
}
```

<div v-click>
<div>Z TS nawet całość się nie mieści... </div>

```tsx {all} {lines:true}
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import type { User } from '../types'

export const getServerSideProps = (async (context) => {
  const res = await fetch('users')
  const users = await res.json()
  return { props: { users } }
}) satisfies GetServerSideProps<{
  users: User[]
}>
 
export default function Page({
  users,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <UsersList users={users} />
}
```
</div>
<div>

</div>


--- 
layout: fact
---

Znamy dotychczasowe problemy, więc poznajmy React Server Components

---
layout: statement
---

# RSC pozwalają na renderowanie komponentów Reacta po stronie serwera.


---
layout: two-cols

---
## Client Component

<div class="mr-2">
```jsx {all} {lines:true}
function UserPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/api/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.userId}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
}
```
</div>


:: right ::

## Server Component (Next.js)

<div>
```jsx {all|2|1} {lines:true}
export default async function UserPage() {
  const users = await getUsers();

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.userId}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
}
```
</div>

---
layout: two-cols

---
## Client Component
<div class="mr-2">

```jsx {lines:true}
function UserPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/api/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.userId}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
}
```
</div>
:: right ::

## Server Component (Next.js)

```jsx {all|2-5} {lines:true}
export default async function UserPage() {
  const users = await sql`
    SELECT * FROM users
  `;

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.userId}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
}
```

---
layout: fact
---

## Demo


---
layout: default
---

## Cool! Dodajmy trochę logiki

```jsx {all} {lines:true}
export default async function UserPage() {
  const users = await sql`
    SELECT * FROM users
  `;

  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.userId}>
            <p>{user.username}</p>
            <input
              type="checkbox"
              checked={selectedUser === user.userId}
              onChange={() => setSelectedUser(user.userId)}
            />
          </li>
        )}
      </ul>
    </div>
  );
}
```


<img
  v-click
  class="absolute top-20 right-7 w-80"
  src="/images/Explosion-Boom.png"
  alt=""
/>


---
layout: two-cols
---

## Co zrobić, żeby to zadziałało?

<div class="mr-2">
```jsx {all} {lines:true}
export default async function UserPage() {
  const users = await sql`
    SELECT * FROM users
  `;

  return (
    <div>
      <h1>Users</h1>
      <UserList users={users} />
    </div>
  );
}
```
</div>
::right::

```jsx {all|2} {lines:true}
// UserList.js
"use client";
export default function UserList({ users }) {
  const [user, setUser] = useState(null);

  return (
    <ul>
      {users.map(u => (
        <li key={u.userId}>
          <p>{u.username}</p>
          <input
            type="checkbox"
            checked={user === u.userId}
            onChange={() => setUser(u.userId)}
          />
        </li>
      )}
    </ul>
  );
}
```
---
layout: fact
---

## Demo


---
layout: center
---

## Bundle size hell
 <img
    class="w-100 h-100 abs"
    src="/images/bundle-size.png"
    alt=""
/>

---
layout: fact
---

## Demo


---
layout: default
---

## Co z mutacją danych?


```jsx {all} {lines:true}
export default function Page() {
  const handleSubmit = async (formData: FormData) => {
    "use server";
    const username = formData.get("username");
    await sql`
      INSERT INTO users (username)
      VALUES (${username})
    `;
  };

  return (
    <form action={handleSubmit}>
      <label>Username</label> <br />
      <input id="username" name="username" className="text-black" />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
```

---
layout: default
--- 

## Co jeśli?
![Alt text](/images/suspense.png)

<ul class="abs-bl text-sm m-6">
  <li>TTI - Time To Interactive</li>
  <li>FCP - First Contentful Paint</li>
  <li>LCP - Largest Content Paint</li>
</ul>

---
layout: fact
---

## Cool stuff

---
layout: two-cols
---

## Zalety
- Szybsze ładowanie strony
- Google zaindeksuje naszą stronę
- Cache przeglądarki są wykorzystywane
- Mniejszy bundle JS

::right::

## Wady
- Nowy paradygmat
- Trudniejsze debugowanie i testowanie
- Nie wszystkie komponenty mogą być renderowane po stronie serwera
- Nie wszystkie biblioteki są kompatybilne



---
layout: default
---

## Podsumowanie

- Nowy paradygmat, który wymaga częściowej zmiany sposobu myślenia
- Nowe narzędzia oferują nam wiele benefitów (SEO, Bundle Size, UX, DX)
- RSC nie jest rozwiązaniem dla wszystkich problemów i nie zastąpi CSR

---
layout: center
---

## Co dalej?

- https://www.joshwcomeau.com/react/server-components/ Making sense of RSC
- https://github.com/reactwg/react-18/discussions/37 New Suspense SSR Architecture in React 18
- https://nextjs.org/docs/app/building-your-application/data-fetching NextJS Docs

---
layout: center
---

## Pytania

---
layout: end
---

## Dziękuję bardzo za uwagę!


