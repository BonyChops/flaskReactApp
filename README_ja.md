[English](./README.md) | [日本語]

# flaskReactApp
Flask + React + Inertia + Vite で作るサンプル Web アプリ。

## 準備
```shell
pip install -r requirements.txt
flask vite install
```

> [!NOTE]
> うまくいかない場合は以下もお試しください
> ```shell
> python3 -m flask vite install
> ```

## 起動

### 開発時
以下のコマンドを別々のターミナルで実行してください。

```shell
flask --debug run
```

```shell
flask vite start
```

### 本番環境

```shell
flask vite build
flask --app app run
```