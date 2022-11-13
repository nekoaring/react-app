# What is it?

ReactでAPIを叩くためにつくったよ
## つくるためにやったこと

1. JavaScript実行環境の[node](https://nodejs.org/ja/)をインストール

2. [Create React App](https://github.com/facebook/create-react-app)を使ってReactプロジェクトを作成

`npx create-react-app react-app --template typescript`

3. サンプルページを改変してAPIを叩く機能を追加

- [App.tsx](src/App.tsx)ファイルにAPI callするメソッドを追加
- API callするメソッドを呼び出すボタンを追加
- APIサーバーから帰ってきたレスポンスを表示するコードを追加

## 動作確認

前提として、リポジトリのディレクトリで`npm install`コマンドを実行してパッケージをインストールしておくこと

以下コマンドで動作確認ができるよ
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

