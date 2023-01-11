Config.jsonで指定した言語ファイルにあるアイテム名とブロック名を ほかの言語に追加する
<br>
<br>
Sample Resource pack (1.19.2) : ItemAddEnglish.zip

![2022-09-21_19 08 38](https://user-images.githubusercontent.com/77374813/191485778-321bbc23-118a-4a9b-b08a-66a8877da22e.png)
![2022-09-21_19 08 54](https://user-images.githubusercontent.com/77374813/191485793-bcfd75ef-e38c-41c3-9e61-70b279010536.png)
## 使い方
Node.jsをインストール
<br>
index.jsがある階層にen_us.json(英語の言語ファイル)を設置にある
<br>
Config.json の assets の項目の`  [User Name]  `をminecraftを自分のユーザー名に書き換える
<br>
Config.json の index の項目を 目的のMinecraftのバージョンに変更する(.minecraft/assets/indexes/○○.json)
<br>
start.bat
