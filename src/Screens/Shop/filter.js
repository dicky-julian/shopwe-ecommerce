import React, { useState, useEffect } from 'react';
import { Dimensions, Text, TouchableOpacity, ScrollView, View } from 'react-native';
import { Topbar } from '../../Components';
import style from './style';
import { color as colors } from '../../Assets/Styles';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import { setFilters } from '../../Redux/Actions/products/products';

const Filter = (props) => {
  const navigation = useNavigation();
  const { sizes, categories } = props.products.filters;
  const myColors = props.products.filters.colors;
  const [color, setColor] = useState(myColors);
  const [size, setSize] = useState(sizes);
  const [category, setCategory] = useState(categories);
  const colorPallette = ['#000', '#F7F7F7', '#B82222', '#BEA9A9', '#E2BB8D', '#151867'];
  const sizePallette = ['XS', 'S', 'M', 'L', 'XL'];
  const categoryPallette = ['All', 'Women', 'Men', 'Boys', 'Girls', 'Kids'];

  /**
   * Life Cycles
   */

  /**
   * Logics
   */
  const applyFilters = () => {
    props.setFilters({
      colors: color,
      sizes: size,
      categories: category
    })
    navigation.goBack();
  }
  return (
    <View style={{flex: 1, position: 'relative'}}>
      <Topbar backNav={true} title="Filters" />

      <View style={{ height: Dimensions.get('window').height + 10 }}>
        <ScrollView>
          <View style={style.filterContainer}>
            {/* COLOR PICKER */}
            <View>
              <Text style={style.titleText}>Color</Text>
              <View style={style.filterCard}>
                {colorPallette.map((col, key) => {
                  if (col === color)
                    return (
                      <TouchableOpacity
                        style={{
                          ...style.colorWrapper,
                          borderColor: colors.primary,
                        }}
                        key={key}
                        onPress={() => setColor()}>
                        <View
                          style={{
                            ...style.colorPicker,
                            backgroundColor: col,
                          }}></View>
                      </TouchableOpacity>
                    );
                  else
                    return (
                      <TouchableOpacity
                        style={{
                          ...style.colorWrapper,
                          borderColor: 'transparent',
                        }}
                        key={key}
                        onPress={() => setColor(col)}>
                        <View
                          style={{
                            ...style.colorPicker,
                            backgroundColor: col,
                          }}></View>
                      </TouchableOpacity>
                    );
                })}
              </View>
            </View>
            {/* SIZES FILTER */}
            <View>
              <Text style={style.titleText}>Sizes</Text>
              <View style={style.filterCard}>
                {sizePallette.map((siz, key) => {
                  if (siz === size)
                    return (
                      <TouchableOpacity
                        style={{
                          ...style.sizePicker,
                          backgroundColor: colors.primary,
                          borderColor: colors.primary,
                        }}
                        key={key}
                        onPress={() => setSize()}>
                        <Text style={{ fontSize: 16, color: colors.light }}>
                          {siz}
                        </Text>
                      </TouchableOpacity>
                    );
                  else
                    return (
                      <TouchableOpacity
                        style={{
                          ...style.sizePicker,
                          backgroundColor: 'transparent',
                          borderColor: colors.fade,
                        }}
                        key={key}
                        onPress={() => setSize(siz)}>
                        <Text style={{ fontSize: 16, color: colors.dark }}>
                          {siz}
                        </Text>
                      </TouchableOpacity>
                    );
                })}
              </View>
            </View>
            {/* CATEGORIES FILTER */}
            <View>
              <Text style={style.titleText}>Category</Text>
              <View style={style.filterCard}>
                {categoryPallette.map((cat, key) => {
                  if (cat === category)
                    return (
                      <TouchableOpacity
                        style={{
                          ...style.categoryPicker,
                          backgroundColor: colors.primary,
                          borderColor: colors.primary,
                        }}
                        key={key}
                        onPress={() => setCategory()}>
                        <Text style={{ fontSize: 16, color: colors.light }}>
                          {cat}
                        </Text>
                      </TouchableOpacity>
                    );
                  else
                    return (
                      <TouchableOpacity
                        style={{
                          ...style.categoryPicker,
                          backgroundColor: 'transparent',
                          borderColor: colors.fade,
                        }}
                        key={key}
                        onPress={() => setCategory(cat)}>
                        <Text style={{ fontSize: 16, color: colors.dark }}>
                          {cat}
                        </Text>
                      </TouchableOpacity>
                    );
                })}
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={[style.bottomBar, {position: 'absolute', right: 0, bottom: 0, left: 0}]}>
        <TouchableOpacity
          style={{
            ...style.button,
            borderColor: colors.dark,
          }}>
          <Text style={{ fontSize: 16, color: colors.dark }}>Discard</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...style.button,
            backgroundColor: colors.primary,
            borderColor: 'transparent',
          }}
          onPress={() => applyFilters()}>
          <Text style={{ fontSize: 16, color: colors.light }}>Apply</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const mapStateToProps = (state) => ({
  products: state.products
})

const mapDispatchToProps = {
  setFilters
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);