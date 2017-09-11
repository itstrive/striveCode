1. 构建失败

   初始化项目后执行react-native run-ios，构建失败：

   ```
   ** BUILD FAILED **The following commands produced analyzer issues:    Analyze /Users/lcz/workspace/APP/temp/node_modules/react-native/ReactCommon/yoga/yoga/YGNodeList.c    Analyze /Users/lcz/workspace/APP/temp/node_modules/react-native/ReactCommon/yoga/yoga/Yoga.c(2 commands with analyzer issues)The following build commands failed:    PhaseScriptExecution Install\ Third\ Party /Users/lcz/workspace/APP/temp/ios/build/Build/Intermediates/React.build/Debug-iphonesimulator/double-conversion.build/Script-190EE32F1E6A43DE00A8543A.sh(1 failure)Installing build/Build/Products/Debug-iphonesimulator/temp.appAn error was encountered processing the command (domain=NSPOSIXErrorDomain, code=2):Failed to install the requested applicationAn application bundle was not found at the provided path.Provide a valid path to the desired application bundle.Print: Entry, ":CFBundleIdentifier", Does Not ExistCommand failed: /usr/libexec/PlistBuddy -c Print:CFBundleIdentifier build/Build/Products/Debug-iphonesimulator/temp.app/Info.plistPrint: Entry, ":CFBundleIdentifier", Does Not Exist
   ```

   解决: 是react-native版本的问题。

   测试版本：

   "react": "16.0.0-alpha.12",
   "react-native": "0.45.0"

   切换成下面的版本就可以了：

   "react": "16.0.0-alpha.6",
   "react-native": "0.44.3"

   具体操作：删除node-modules文件夹，修改pakage.json文件，然后执行npm install

   注意：react版本要和react-native版本搭配，上面版本只换一个也会出错

2. IOS平台下引入图片的问题

   ios9之上默认, 图片地址需要是 https的地址,要不然不显示出来

   解决:

   > 用xcode打开项目
   >
   > 比如项目名称叫 helloReact
   >
   > helloReact -> info.plist -> App Transport Security Settings  -> 新增
   >
   > Allow Arbitrasy loads 设置为 YES， 然后重启项目即可

3. 如果你手贱，移动了xcode的路径

   如果移动了xcode，那么路径变了，

   那么  react-native run-ios 就会挂掉

   需要:

   ```
   xcode-select --switch your path/Xcode.app
   ```

4. ListView组件相关:

   - 去除上方空白

     ```jsx
     <ListView
     	automaticallyAdjustContentInsets={false}   //设为false即可
     />
     ```

   - 隐藏滚动条

     ```jsx
     <ListView
     	showVerticalScrollIndicator={false}
     />
     ```

     ​

