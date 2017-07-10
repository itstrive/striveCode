#### NSArray常用的方法:

> NSArray 普通数组
>
> NSMutableArray 可变数组
>
> 数组的遍历
>
> 注意:
>
> * OC的数组可以存储不同类型的对象，OC的数组只能存储对象,基本类型不能直接存储

定义数组

```objective-c
NSArray *array=[[NSArray alloc] initWithObjects:@"apple",@"banana",@"orange",@"pear",@"tomato", nil];
```

1. 数组的个数

   ```objective-c
   int count=(int)array.count; //数组中的count，个数
   NSLog(@"count:%d",count);
   ```

2. 判断当前数组中是否有某个对象

   ```objective-c
   BOOL isHave=[array containsObject:@"tomato"];
   if(isHave)
   	NSLog(@"存在");
   else
   	NSLog(@"不存在");
   ```

3. 取数组最后一项

   ```objective-c
   NSString *lastStr=[array lastObject];
   NSLog(@"lastStr:%@",lastStr);
   ```

4. 取数组第一项

   ```objective-c
   NSString *firstStr=[array firstObject];
   NSLog(@"firstStr:%@",firstStr);
   ```

5. 取数组中的某个

   ```objective-c
   NSString *str=[array objectAtIndex:3];
   NSLog(@"str:%@",str);
   ```

6. 查找某一项的下标，找不到返回-1

   ```objective-c
   int index=(int)[array indexOfObject:@"banana"];
   NSLog(@"index:%d",index);
   ```

#### 数组的遍历:

1. 普通for循环，遍历

   ```objective-c
   for(int i=0; i<array.count; i++)
   {
   	NSString *s=[array objectAtIndex:i]; //因为数组里面装的都是string
   	NSLog(@"s:%@",s);
   }
   ```

2. for in  这种方式必须确保数组中的类型保持一致

   ```objective-c
   for(NSString *str2 in array)
   {
   	NSLog(@"str:%@",str2);
   }
   ```

#### NSMutableArray的常用方法:

> 往这个可变数组里面存几个对象
>
> 准备一个Person类

Person.h 文件的代码:

```objective-c
#import <Foundation/Foundation.h>

@interface MyClass : NSObject
@property(nonatomic,strong)NSString *personName;
-(instancetype)initWithName:(NSString *)name;
@end
```

Person.m 文件的代码:

```objective-c
#import "MyClass.h"

@implementation MyClass
-(instancetype)initWithName:(NSString *)name
{
    self=[super init];
    
    if(self)
    {
        _personName=name;
    }
    return self;
}

@end
```

main.m 里面使用:

```objective-c
#import <Foundation/Foundation.h>
#import "MyClass.h"

int main(int argc, const char * argv[]) {
    
    @autoreleasepool {
        /* 实例化几个对象*/
        MyClass *p1=[[MyClass alloc] initWithName:@"张三"];
        MyClass *p2=[[MyClass alloc] initWithName:@"李四"];
        MyClass *p3=[[MyClass alloc] initWithName:@"王五"];
        
        NSArray *personArray=[[NSArray alloc] initWithObjects:p2,p3, nil];
        
        NSMutableArray *array=[[NSMutableArray alloc] init];
        
        //添加元素
        [array addObject:p1];
        [array addObjectsFromArray:personArray];
        NSLog(@"1. %@",array);
        
        //删除
//        [array removeLastObject]; //删除数组中最后一个元素
//        [array removeObject:p1]; //删除某个元素
//        [array removeObjectAtIndex:1];  //删除对应下标的某个元素
//        [array removeAllObjects]; //删除数组内所有元素
        
        //交换元素的位置
        [array exchangeObjectAtIndex:0 withObjectAtIndex:1];
        NSLog(@"2. %@",array);
    }
    return 0;
}

```

