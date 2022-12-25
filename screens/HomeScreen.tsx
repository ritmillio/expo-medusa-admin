import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Svg, Rect } from 'react-native-svg';

const HomeScreen = () => {

  
  const data = [
    { hour: 0, value: 5, },
    { hour: 1, value: 10, },
    { hour: 2, value: 7, },
    { hour: 3, value: 12, },
    { hour: 4, value: 8,  },
    { hour: 5, value: 15, },
    { hour: 6, value: 10, },
    { hour: 7, value: 9,  },
    { hour: 8, value: 11, },
    { hour: 9, value: 8,  },
    { hour: 10, value: 14, },
    { hour: 11, value: 12, },
    { hour: 12, value: 10, },
    { hour: 13, value: 8,  },
    { hour: 14, value: 12,  },
    { hour: 15, value: 9,  },
    { hour: 16, value: 7,  },
    { hour: 17, value: 14, },
    { hour: 18, value: 10, },
    { hour: 19, value: 11, },
    { hour: 20, value: 8,  },
    { hour: 21, value: 12, },
    { hour: 22, value: 9,  },
    { hour: 23, value: 15, }
  ];

  return (
    <SafeAreaView className='flex-1'>
      <View className='flex min-h-[40%] w-screen bg-medusa-purple pt-4 border-[1px] border-medusa-purple'>
        <Text className='text-white pl-4'>Today's activity</Text>
        <View className='pt-4 px-4 flex flex-row justify-between'>
          <Text className='text-white text-3xl'>$1,249.54</Text>
          <Text className='text-white text-3xl'>15.44%</Text>
        </View>
        <View className='py-1 px-4 flex flex-row justify-between'>
          <Text className='text-white'>
            <Text className='font-bold'>123{' '}</Text>
            Total Orders
          </Text>
          <Text className='text-white'>Last 24 hours</Text>
        </View>
        <Svg height={350} width='100%'>
          {data.map((item, index) => (
            <React.Fragment key={index}>
              <Rect
                x={index * 20 + 8}
                y={350 - item.value * 19}
                width={13}
                height={item.value * 20}
                fill='white'
              />
            </React.Fragment>
          ))}
        </Svg>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen