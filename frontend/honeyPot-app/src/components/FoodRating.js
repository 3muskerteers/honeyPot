import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Use the appropriate icon library

const StarRating = ({ rating }) => {
  // Assuming rating is a number from 0 to 5
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const iconName = i <= rating ? 'star' : 'star-o'; // Use 'star' for filled star, 'star-o' for outline
      stars.push(<Icon key={i} name={iconName} size={20} color="gold" />);
    }
    return stars;
  };

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      {renderStars()}
      <Text style={{ marginLeft: 5 }}>{rating}/5</Text>
    </View>
  );
};

export default StarRating;
