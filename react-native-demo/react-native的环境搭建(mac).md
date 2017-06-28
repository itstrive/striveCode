相对来说mac下的环境搭建比windows上简单去多，只要网络靠谱就行了

1. 先安装homebrew

   ```bash
   /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
   ```

2. 安装node

   ```bash
   brew install node
   ```

   愿意的话同样可以配置npm镜像源

   ```bash
   npm config set registry https://registry.npm.taobao.org --global
   npm config set disturl https://npm.taobao.org/dist --global
   ```

3. 安装yarn和react-native-cli

   ```bash
   npm install -g yarn react-native-cli
   ```

   配置yarn的npm源

   ```bash
   yarn config set registry https://registry.npm.taobao.org --global
   yarn config set disturl https://npm.taobao.org/dist --global
   ```

4. 安装xCode

   > 注意: 这个就看你的网速了，别用最新版本9，我安装的是8(这步骤耗时了，因为网速尴尬)

5. 安装watchman和flow

   ```bash
   brew install watchman flow
   ```

6. 测试

   ```bash
   react-native init helloReact
   cd helloReact
   react-native run-ios
   ```

   至此，如果运气比较好，就会成功，如果不成功，比如构建错误

   ---

   查看一下react-native的版本，在package.json里面看，然后向下降级版本。

   还不行可以试着运行一下: react-native upgrade