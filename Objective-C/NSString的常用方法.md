#### NSString的常用方法:

> NSString是普通字符串
>
> NSMutableString 可变字符串，是NSString的子类

1. 格式化字符串

   ```objective-c
   int a=12;
   int b=5;
   NSString *str=[NSString stringWithFormat:@"a=%d b=%d", a,b];
   NSLog(@"str: %@", str);
   ```

2. 拼接字符串

   ```objective-c
   NSString *str2=@"welcome";
   NSString *str22=@" to china";

   NSString * str3=[str2 stringByAppendingString:str22];
   NSLog(@"str3: %@", str3);
   ```

3. 大小写转化

   ```objective-c
   NSString *str4=@"ABCDEF";
   NSString *str5=[str4 lowercaseString];
   NSLog(@"str5:%@",str5);

   NSString *str6=@"abcdef";
   NSString *str7=[str6 uppercaseString];
   NSLog(@"str7:%@",str7);
   ```

4. 前缀和后缀的判断

   ```objective-c
   NSString *str8=@"www.baidu.com";
   BOOL hasPrefix=[str8 hasPrefix:@"www."];
   if(hasPrefix)
   	NSLog(@"有对应前缀");
   else
   	NSLog(@"没有对应前缀");
   BOOL hasSuffix=[str8 hasSuffix:@".com"];
   if(hasSuffix)
   	NSLog(@"有对应后缀");
   else
   	NSLog(@"没有对应后缀");
   ```

5. 判断两个字符串是否相等

   ```objective-c
   NSString *str9=@"strive";
   NSString *str10=@"strive";
   if([str10 isEqualToString:str9])
   	NSLog(@"两个字符串相等");
   else
   	NSLog(@"两个字符串不相等");
   ```

6. 字符串分割

   ```objective-c
   NSString *str11=@"a,b,c,d,e,g";
   NSArray *strArray=[str11 componentsSeparatedByString:@","];

   for(NSString *str in strArray){
   	NSLog(@"str=%@",str);
   }
   ```

7. 字符串截取

   ```objective-c
   NSRange range=NSMakeRange(1, 4);
   NSString *str12=@"welcome to china";
   NSString *substring=[str12 substringWithRange:range]; /*区间*/
   NSString *substring2=[str12 substringFromIndex:3]; /*从哪开始截取到最后*/
   NSString *substring3=[str12 substringToIndex:3]; /*从开头截取到哪里*/
   NSLog(@"substring: %@",substring);
   NSLog(@"substring: %@",substring2);
   NSLog(@"substring: %@",substring3);
   ```

8. 将字符串拆分成每一个字符, 遍历整个字符串

   ```objective-c
   NSString *str12=@"welcome to china";
   for(int i=0; i<[str12 length]; i++){
   	NSLog(@"%c",[str12 characterAtIndex:i]);
   }
   ```

9. 查找

   ```objective-c
   NSRange range2=[str12 rangeOfString:@"to"];
   NSLog(@"range2.location:%ld range2.length:%ld", range2.location, range2.length);
   ```

10. 替换

    ```objective-c
    NSString *rangestring=[str12 stringByReplacingCharactersInRange:NSMakeRange(0, 5) withString:@"strive"];  //把某一个区间的东西替换
    NSLog(@"rangestring:%@",rangestring);

    NSString *newstr=[str12 stringByReplacingOccurrencesOfString:@"welcome" withString:@"你好"]; //替换某一个段字符串
    NSLog(@"newstr:%@",newstr);
    ```

11. 读取文件

    ```objective-c
    NSString *strurl=@"www.baidu.com";
    NSURL *httpUrl=[NSURL URLWithString:strurl]; //网络路径
    //NSURL *fileUrl=[NSURL fileURLWithPath:strurl]; //本地路径

    NSString *httpStr=[NSString stringWithContentsOfURL:httpUrl encoding:NSUTF8StringEncoding error:nil]; //读取网络文件
    NSLog(@"httpstr: %@", httpStr);

    NSString *fileStr=[NSString stringWithContentsOfFile:@"/Users/strive/Desktop/oc-learn/oc-learn/aaa.txt" encoding:NSUTF8StringEncoding error:nil]; //读取本地文件
    NSLog(@"fileStr: %@", fileStr);
    ```

12. 写入文件

    ```objective-c
    NSString *contentStr=@"hello strive";
    BOOL isOK=[contentStr writeToFile:@"/Users/strive/Desktop/oc-learn/oc-learn/demo.txt" atomically:YES encoding:NSUTF8StringEncoding error:nil];
    if(isOK)
    	NSLog(@"文件写入成功");
    else
    	NSLog(@"文件写入失败");
    ```

#### NSMutableString的常用方法:

> NSMutableString 是NSString的子类，所以理论上可以使用NSString的所有方法，
>
> 除此以外，还多了几个

定义一个NSMutableString的字符串

```objective-c
NSMutableString *str=[[NSMutableString alloc] initWithCapacity:10]; //10指的是字符串的长度
        
[str setString:@"hello"];
```

1. 追加字符串

   ```objective-c
   [str appendString:@" strive"];
   NSLog(@"str:%@",str);

   int a=30;
   [str appendFormat:@" - %d",a];
   NSLog(@"str:%@",str);
   ```

2. 替换字符串

   ```objective-c
   NSRange range=[str rangeOfString:@"strive"];
   [str replaceCharactersInRange:range withString:@"IOS"];
   NSLog(@"str:%@",str);
   ```

3. 插入字符串, 任何位置插入

   ```objective-c
   [str insertString:@"AAA" atIndex:6];
   NSLog(@"str:%@",str);
   ```

4. 删除字符串

   ```objective-c
   NSRange range1=[str rangeOfString:@"AAAIOS"];
   [str deleteCharactersInRange:range1];
   NSLog(@"str:%@",str);
   ```

   ​

