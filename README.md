# ShareBookmarksWeb

[ShareBookmarks](https://github.com/bvlion/ShareBookmarks) の利用規約とプライバシーポリシーを Web で表示するためのプロジェクト

## 環境

- Cloud Functions for Firebase
- Firebase Hosting

### URL

config に設定している

```
firebase functions:config:get
```

#### 再設定

```
firebase functions:config:set url.terms="https://*.appspot.com/etc/terms_of_use"
firebase functions:config:set url.terms="https://*.appspot.com/etc/privacy_policy"
```
