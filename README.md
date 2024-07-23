[English] | [日本語](./README_ja.md)

# flaskReactApp
A sample web application using Flask and React, integrated with Inertia.

## Setup
```shell
pip install -r requirements.txt
flask vite install
```

> [!NOTE]
> If it doesn't work, please try the following:
> ```shell
> python3 -m flask vite install
> ```

## Launch

### Development
Please run the following commands in separate terminals.

```shell
flask --debug run
```

```shell
flask vite start
```

### Production

```shell
flask vite build
flask --app app run
```