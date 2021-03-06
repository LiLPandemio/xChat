/*
 * @Author: @LiLPandemio 
 * @Date: 2021-05-08 18:31:12 
 * @Last Modified by: @LiLPandemio
 * @Last Modified time: 2021-05-14 20:25:09
 */
import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import EditPublicProfile from './EditPublicProfile'
import EditPrivateProfile from './EditPrivateProfile'
import { useTheme } from 'react-native-paper'
const EditProfile = () => {
    const layout = useWindowDimensions();

    const theme = useTheme();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'public', title: 'public' },
        { key: 'private', title: 'private' },
    ]);

    const renderScene = SceneMap({
        public: EditPublicProfile,
        private: EditPrivateProfile,
    });

    return (
        <View style={{ flex: 1 }}>
            <TabView
                theme={theme}
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
            />
        </View>
    )
}

export default EditProfile
