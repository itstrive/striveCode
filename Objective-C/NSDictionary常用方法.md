#### NSDictionary常用方法:

> 俗称 字典
>
> 和数组的区别在于，存储的内存不是连续的
>
> 用key和value进行对应（键值对）

定义字典:

1. 第一种方式:

```objective-c
NSDictionary *dict1=[NSDictionary dictionaryWithObjects:[NSArray arrayWithObjects:@"1",@"2",@"3", nil] forKeys:[NSArray arrayWithObjects:@"a",@"b",@"c", nil]];
NSLog(@"%@", dict1);
```

2. 第二种方式(这种方式推荐)

```objective-c
NSDictionary *dict2=@{@"a":@"1",@"b":@"2"};
        
NSLog(@"%@",dict2);
```

方法:

1. count方法

   ```objective-c
   NSDictionary *dict2=@{@"a":@"1",@"b":@"2", @"c":@"3"};
   int count=(int)[dict2 count]; //个数
   NSLog(@"%d",count);
   ```

2. 根据键取出值

   ```objective-c
   NSString *val=[dict2 valueForKey:@"b"]; //objectForKey也是同样的功能
   NSLog(@"val:%@",val);
   ```

3. 取所有的键、值

   ```objective-c
   NSArray *allVal=[dict2 allValues];
   NSLog(@"allVal:%@",allVal);

   NSArray *allKey=[dict2 allKeys];
   NSLog(@"allkeys:%@",allKey);
   ```

4. 给字典里面没有的key写默认值

   ```objective-c
   NSArray *arr=[dict2 objectsForKeys:[NSArray arrayWithObjects:@"a",@"b",@"d", nil] notFoundMarker:@"Not Found"];
   NSLog(@"arr:%@", arr);
   ```

#### 遍历字典:

1. for in循环

   ```objective-c
   for(NSString *key in dict2){
   	NSLog(@"%@ = %@",key, [dict2 objectForKey:key]);
   }
   ```

2. 枚举器

   ```objective-c
   NSEnumerator *en=[dict2 keyEnumerator];
   id key=nil;
   while(key=[en nextObject]){
   	NSLog(@"key- %@", key);
   }
   ```

#### NSMutableDictionary的使用:

定义：

```objective-c
NSMutableDictionary *dict=[[NSMutableDictionary alloc] init];
```

1. 添加键值对

   ```objective-c
   [dict setObject:@"1" forKey:@"a"];
   [dict setObject:@"2" forKey:@"b"];

   NSLog(@"dict: %@", dict);
   ```

2. 删除键值对

   ```objective-c
   [dict removeAllObjects]; //删除所有
   [dict removeObjectForKey:@"b"];  //删除某一个
   [dict removeObjectsForKeys:[NSArray arrayWithObjects:@"a",@"b", nil]]; //删除多个
   ```

   ​

