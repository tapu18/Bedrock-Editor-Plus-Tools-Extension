# Bedrock-Editor-Plus-Tools-Extension
Bedrock Editorにツールを追加する拡張機能です。Bedrock Editor については<a href="https://github.com/Mojang/minecraft-editor">こちらの公式ページ</a>をご確認ください。

## 追加されるツール
### 球体ブラシ
半径を2～16まで変更できます。半径が大きいと重くなりやすく、広い範囲を選択すると下手するとクラッシュするので注意してください。
### 円柱ブラシ
半径と高さを2～16まで変更できます。球体に比べると軽いため割と雑に使っても問題ありません。
### ブレンドブラシ
複数のブロックをランダムに混ぜることができるブラシを追加します。最大4つのブロックを混ぜることができ、1～100の重みを指定して各ブロックの生成割合を調整できます。
### 平滑化ブラシ
近傍のブロックの高さを平均して、ブロックを設置もしくは削除します。設置のみもしくは削除のみの設定も可能です。
### ノイズ地形生成
perlinノイズによる地形生成を行います。マイクラのような地形がランダムに生成されます。シードを-1にすることでランダムに、0～65535に設定するとシード値が固定されます。
