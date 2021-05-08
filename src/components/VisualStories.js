/*
 * @Author: @LiLPandemio 
 * @Date: 2021-05-08 18:30:24 
 * @Last Modified by:   @LiLPandemio 
 * @Last Modified time: 2021-05-08 18:30:24 
 */
import React from 'react'
import { View, Text, FlatList } from 'react-native'
import VisualStoryUnit from './VisualStoryUnit'

const Separator = () => {
    return (<View style={{width: 10}}/>)
}

const VisualStories = () => {
    return (
        <View>
            <FlatList ListHeaderComponent={Separator} style={{}} horizontal showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}
                data={[
                    { key: "https://cataas.com/cat/says/10d10", profilePicURL: "https://cataas.com/cat/says/1a05" },
                    { key: "https://cataas.com/cat/says/1as020", profilePicURL: "https://cataas.com/cat/says/10sd06" },
                    { key: "https://cataas.com/cat/says/1d030", profilePicURL: "https://cataas.com/cat/says/10as07" },
                    { key: "https://cataas.com/cat/says/1d0as40", profilePicURL: "https://cataas.com/cat/says/10da08" },
                    { key: "https://cataas.com/cat/says/1asd0100", profilePicURL: "https://cataas.com/cat/says/1sd0055" },
                    { key: "https://cataas.com/cat/says/1as0200", profilePicURL: "https://cataas.com/cat/says/10as065" },
                    { key: "https://cataas.com/cat/says/10da300", profilePicURL: "https://cataas.com/cat/says/10ds075" },
                    { key: "https://cataas.com/cat/says/1ds0400", profilePicURL: "https://cataas.com/cat/says/10ad085" },
                ]}
                renderItem={({ item }) => <VisualStoryUnit ProfilePicture={item.profilePicURL} StoryPreview={item.key} />}
            />
        </View>
    )
}

export default VisualStories
