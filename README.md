Simple NextJs Boilerplate with Tailwind CSS 3 + TypeScript ⚡️ for fast Development.

### Getting Started

```bash
# install dependency
npm install
# run local server development
npm run dev
```

### Features

- Absolute path import using `@/` prefix
- Integrate with [Tailwind CSS](https://tailwindcss.com/)
- Prettier plugin tailwindcss
- SEO with tag Next `<Head/>`
- Fetcher utils

## Utils Usage

`fetch.ts`

```ts
// GET
fetchData: async () => {
const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: '',
  },
  url: 'https://yourendpoint.com',
};

fetch(options)
  .then((response) => {
    console.log(response);
  })
  .catch((err: any) => {
    console.log(err);
  });
},

// POST
createData: async (payload: any) => {
const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Accept-Language': 'id',
        Authorization: ''
        },
        url: 'https://yourendpoint.com',
        data: payload,
    };
    fetch(options)
        .then((response) => {
          console.log(response)
        })
        .catch((err: any) => {
            console.log(err)
        });
    },
```

### Folder Structure

```shell
.
├── README.md                       # README file
├── public                          # Public assets folder
├── src
│   ├── layouts                     # Layouts components
│   ├── pages                       # Next JS Pages
│   ├── styles                      # Styles folder
│   ├── utils                      # utils folder
├── tailwind.config.js              # Tailwind CSS configuration
└── tsconfig.json                   # TypeScript configuration
```

### Dependency version

```
"next": "12.1.5",
"react": "18.0.0",
"react-dom": "18.0.0"
"prettier-plugin-tailwindcss": "^0.1.8",
"tailwindcss": "^3.1.6",
"axios": "^0.27.2",
"retry-axios": "^3.0.0"
```
