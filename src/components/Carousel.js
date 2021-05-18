import React from "react";
import { View, StatusBar, SafeAreaView } from "react-native";

import ImagedCarouselCard from "react-native-imaged-carousel-card";

const Carousel = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
          <ImagedCarouselCard
            height={150}
            width={200}
            shadowColor="#051934"
            source={{
              uri:
                "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
            }}
          />
      </SafeAreaView>
    </>
  );
};
export default Carousel;