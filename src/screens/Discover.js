import React, { Component } from 'react'
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  Keyboard, 
  TouchableWithoutFeedback, 
  TouchableOpacity, 
  ScrollView,
  Button,
  Image,
} from 'react-native'
import GlobalStyles from '../GlobalStyles'
import Utils from '../Utils'
import realm from '../realm'
import Swiper from 'react-native-deck-swiper'
import FastImage from 'react-native-fast-image'
import Card from '../components/Discover/Card'
import store from 'react-native-simple-store'

// import FIXED_RESPONSE from '../FIXED_RESPONSE'
const FIXED_RESPONSE = {"count": 30, "recipes": [{"publisher": "BBC Food", "f2f_url": "http://food2fork.com/view/8c0314", "title": "Chicken and cashew nut stir-fry", "source_url": "http://www.bbc.co.uk/food/recipes/chickenandcashewnuts_89299", "recipe_id": "8c0314", "image_url": "http://static.food2fork.com/chickenandcashewnuts_89299_16x9986b.jpg", "social_rank": 95.91061636245128, "publisher_url": "http://www.bbc.co.uk/food"}, {"publisher": "Jamie Oliver", "f2f_url": "http://food2fork.com/view/0beb06", "title": "Roasted chicken breast with pancetta, leeks & thyme", "source_url": "http://www.jamieoliver.com/recipes/chicken-recipes/roasted-chicken-breast-with-pancetta-leeks-and-thyme", "recipe_id": "0beb06", "image_url": "http://static.food2fork.com/466_1_1349094314_lrg2129.jpg", "social_rank": 94.88568903341375, "publisher_url": "http://www.jamieoliver.com"}, {"publisher": "All Recipes", "f2f_url": "http://food2fork.com/view/5052", "title": "Buffalo Chicken Chili", "source_url": "http://allrecipes.com/Recipe/Buffalo-Chicken-Chili/Detail.aspx", "recipe_id": "5052", "image_url": "http://static.food2fork.com/2028272b37.jpg", "social_rank": 94.58658353411347, "publisher_url": "http://allrecipes.com"}, {"publisher": "BBC Good Food", "f2f_url": "http://food2fork.com/view/e5c48b", "title": "Chicken breast with avocado salad", "source_url": "http://www.bbcgoodfood.com/recipes/1364637/chicken-breast-with-avocado-salad", "recipe_id": "e5c48b", "image_url": "http://static.food2fork.com/1364637_MEDIUMc356.jpg", "social_rank": 94.35603716159841, "publisher_url": "http://www.bbcgoodfood.com"}, {"publisher": "All Recipes", "f2f_url": "http://food2fork.com/view/28674", "title": "Simply Parmesan Chicken", "source_url": "http://allrecipes.com/Recipe/Simply-Parmesan-Chicken/Detail.aspx", "recipe_id": "28674", "image_url": "http://static.food2fork.com/1768256a59.jpg", "social_rank": 93.80034906530031, "publisher_url": "http://allrecipes.com"}, {"publisher": "BBC Food", "f2f_url": "http://food2fork.com/view/cc7512", "title": "Chicken biryani", "source_url": "http://www.bbc.co.uk/food/recipes/chickenbiriyani_89035", "recipe_id": "cc7512", "image_url": "http://static.food2fork.com/chickenbiriyani_89035_16x90f07.jpg", "social_rank": 92.40780296275469, "publisher_url": "http://www.bbc.co.uk/food"}, {"publisher": "Bon Appetit", "f2f_url": "http://food2fork.com/view/51439", "title": "Chicken Parmesan", "source_url": "http://www.bonappetit.com/recipes/2008/09/chicken_parmesan", "recipe_id": "51439", "image_url": "http://static.food2fork.com/mare_chicken_parmesan_h176c.jpg", "social_rank": 90.59575791272333, "publisher_url": "http://www.bonappetit.com"}, {"publisher": "BBC Good Food", "f2f_url": "http://food2fork.com/view/98d440", "title": "Artichoke, chicken & lemon linguine", "source_url": "http://www.bbcgoodfood.com/recipes/1145661/artichoke-chicken-and-lemon-linguine", "recipe_id": "98d440", "image_url": "http://static.food2fork.com/1145661_MEDIUM627e.jpg", "social_rank": 90.2326225525024, "publisher_url": "http://www.bbcgoodfood.com"}, {"publisher": "BBC Good Food", "f2f_url": "http://food2fork.com/view/978c40", "title": "Chicken with lemon & courgette couscous", "source_url": "http://www.bbcgoodfood.com/recipes/333612/chicken-with-lemon-and-courgette-couscous", "recipe_id": "978c40", "image_url": "http://static.food2fork.com/333612_MEDIUM064c.jpg", "social_rank": 90.10743372168618, "publisher_url": "http://www.bbcgoodfood.com"}, {"publisher": "BBC Good Food", "f2f_url": "http://food2fork.com/view/c332f0", "title": "Posh chicken nuggets", "source_url": "http://www.bbcgoodfood.com/recipes/1562652/posh-chicken-nuggets", "recipe_id": "c332f0", "image_url": "http://static.food2fork.com/1562652_MEDIUM1004.jpg", "social_rank": 89.42509401242557, "publisher_url": "http://www.bbcgoodfood.com"}, {"publisher": "BBC Good Food", "f2f_url": "http://food2fork.com/view/a4042b", "title": "Chicken & Sweetcorn Soup", "source_url": "http://www.bbcgoodfood.com/recipes/180619/chicken-and-sweetcorn-soup", "recipe_id": "a4042b", "image_url": "http://static.food2fork.com/197075_medium0a7a.jpg", "social_rank": 89.3240030128329, "publisher_url": "http://www.bbcgoodfood.com"}, {"publisher": "All Recipes", "f2f_url": "http://food2fork.com/view/7536", "title": "Chicken Tinga Tostados", "source_url": "http://allrecipes.com/Recipe/Chicken-Tinga-Tostados/Detail.aspx", "recipe_id": "7536", "image_url": "http://static.food2fork.com/858984337e.jpg", "social_rank": 88.4168442855139, "publisher_url": "http://allrecipes.com"}, {"publisher": "BBC Good Food", "f2f_url": "http://food2fork.com/view/9050f9", "title": "Light lemon chicken Caesar", "source_url": "http://www.bbcgoodfood.com/recipes/1355635/light-lemon-chicken-caesar", "recipe_id": "9050f9", "image_url": "http://static.food2fork.com/1355635_MEDIUM1c5e.jpg", "social_rank": 87.79613940338393, "publisher_url": "http://www.bbcgoodfood.com"}, {"publisher": "All Recipes", "f2f_url": "http://food2fork.com/view/7162", "title": "Chicken Delicious", "source_url": "http://allrecipes.com/Recipe/Chicken-Delicious/Detail.aspx", "recipe_id": "7162", "image_url": "http://static.food2fork.com/48639c001.jpg", "social_rank": 87.66677648110736, "publisher_url": "http://allrecipes.com"}, {"publisher": "BBC Good Food", "f2f_url": "http://food2fork.com/view/4b8ff5", "title": "Chicken & mango stir fry", "source_url": "http://www.bbcgoodfood.com/recipes/2398/chicken-and-mango-stir-fry", "recipe_id": "4b8ff5", "image_url": "http://static.food2fork.com/2398_MEDIUMb464.jpg", "social_rank": 87.50915533711165, "publisher_url": "http://www.bbcgoodfood.com"}, {"publisher": "Epicurious", "f2f_url": "http://food2fork.com/view/6a6d6c", "title": "Chicken Breasts with Tomato-Herb Pan Sauce", "source_url": "http://www.epicurious.com/recipes/food/views/Chicken-Breasts-with-Tomato-Herb-Pan-Sauce-366432", "recipe_id": "6a6d6c", "image_url": "http://static.food2fork.com/epicuriousfacebook511b.png", "social_rank": 87.26493690171542, "publisher_url": "http://www.epicurious.com"}, {"publisher": "BBC Good Food", "f2f_url": "http://food2fork.com/view/b4eaa4", "title": "Chicken & broccoli pasta bake", "source_url": "http://www.bbcgoodfood.com/recipes/1948/chicken-and-broccoli-pasta-bake", "recipe_id": "b4eaa4", "image_url": "http://static.food2fork.com/1948_MEDIUM8fbc.jpg", "social_rank": 87.255689704409, "publisher_url": "http://www.bbcgoodfood.com"}, {"publisher": "BBC Good Food", "f2f_url": "http://food2fork.com/view/5f3b80", "title": "Sweet & sour chicken & veg", "source_url": "http://www.bbcgoodfood.com/recipes/1162660/sweet-and-sour-chicken-and-veg", "recipe_id": "5f3b80", "image_url": "http://static.food2fork.com/1162660_MEDIUMe96a.jpg", "social_rank": 85.55485980745388, "publisher_url": "http://www.bbcgoodfood.com"}, {"publisher": "Real Simple", "f2f_url": "http://food2fork.com/view/39397", "title": "Baked Pecorino Chicken", "source_url": "http://www.realsimple.com/food-recipes/browse-all-recipes/baked-pecorino-chicken-00100000062328/index.html", "recipe_id": "39397", "image_url": "http://static.food2fork.com/bakedchicken_3003ddb97a2.jpg", "social_rank": 84.77876133352308, "publisher_url": "http://realsimple.com"}, {"publisher": "BBC Good Food", "f2f_url": "http://food2fork.com/view/0002d6", "title": "All-in-one roast chicken & veg", "source_url": "http://www.bbcgoodfood.com/recipes/988637/allinone-roast-chicken-and-veg", "recipe_id": "0002d6", "image_url": "http://static.food2fork.com/988637_MEDIUMabfc.jpg", "social_rank": 84.53086303742718, "publisher_url": "http://www.bbcgoodfood.com"}, {"publisher": "BBC Good Food", "f2f_url": "http://food2fork.com/view/93f36c", "title": "Christmas pie", "source_url": "http://www.bbcgoodfood.com/recipes/2793/christmas-pie", "recipe_id": "93f36c", "image_url": "http://static.food2fork.com/2793_MEDIUMaa84.jpg", "social_rank": 83.76867154251453, "publisher_url": "http://www.bbcgoodfood.com"}, {"publisher": "Framed Cooks", "f2f_url": "http://food2fork.com/view/92b194", "title": "Chicken with Spring Vegetables and Gnocchi", "source_url": "http://www.framedcooks.com/2012/05/chicken-with-spring-vegetables-and-gnocchi.html", "recipe_id": "92b194", "image_url": "http://static.food2fork.com/iW8v49knM5faff.jpg", "social_rank": 80.83140529447712, "publisher_url": "http://framedcooks.com"}, {"publisher": "Simply Recipes", "f2f_url": "http://food2fork.com/view/35750", "title": "Baked Chicken Parmesan", "source_url": "http://www.simplyrecipes.com/recipes/baked_chicken_parmesan/", "recipe_id": "35750", "image_url": "http://static.food2fork.com/simplyrecipeslogodefaultf402004e.jpg", "social_rank": 80.50068829860142, "publisher_url": "http://simplyrecipes.com"}, {"publisher": "BBC Good Food", "f2f_url": "http://food2fork.com/view/6a89e0", "title": "Chicken stuffed with herby mascarpone", "source_url": "http://www.bbcgoodfood.com/recipes/4787/chicken-stuffed-with-herby-mascarpone", "recipe_id": "6a89e0", "image_url": "http://static.food2fork.com/4787_MEDIUM14f8.jpg", "social_rank": 80.37252082959394, "publisher_url": "http://www.bbcgoodfood.com"}, {"publisher": "Chow", "f2f_url": "http://food2fork.com/view/6a976d", "title": "Chicken-Fried Chicken and Pickled Pepper Sandwiches Recipe", "source_url": "http://www.chow.com/recipes/30385-chicken-fried-chicken-and-pickled-pepper-sandwiches", "recipe_id": "6a976d", "image_url": "http://static.food2fork.com/30385_Recipeimage_620x413_chicken_fried_pickled_pepper_sandwichesfdc5.jpg", "social_rank": 78.85903981683924, "publisher_url": "http://www.chow.com"}, {"publisher": "BBC Good Food", "f2f_url": "http://food2fork.com/view/c94137", "title": "Flattened chicken with tomatoes, olives & capers", "source_url": "http://www.bbcgoodfood.com/recipes/12742/flattened-chicken-with-tomatoes-olives-and-capers", "recipe_id": "c94137", "image_url": "http://static.food2fork.com/12742_MEDIUMe476.jpg", "social_rank": 77.72615270226183, "publisher_url": "http://www.bbcgoodfood.com"}, {"publisher": "BBC Good Food", "f2f_url": "http://food2fork.com/view/fb262d", "title": "Chicken & broad bean filo pies", "source_url": "http://www.bbcgoodfood.com/recipes/2302664/chicken-and-broad-bean-filo-pies", "recipe_id": "fb262d", "image_url": "http://static.food2fork.com/2302664_MEDIUMede0.jpg", "social_rank": 77.086195608727, "publisher_url": "http://www.bbcgoodfood.com"}, {"publisher": "All Recipes", "f2f_url": "http://food2fork.com/view/15347", "title": "Green Chili Chicken Burgers", "source_url": "http://allrecipes.com/Recipe/Green-Chili-Chicken-Burgers/Detail.aspx", "recipe_id": "15347", "image_url": "http://static.food2fork.com/73172343c7.jpg", "social_rank": 74.90826597537934, "publisher_url": "http://allrecipes.com"}, {"publisher": "Whats Gaby Cooking", "f2f_url": "http://food2fork.com/view/bf98a7", "title": "Chicken Parmesan Pizza", "source_url": "http://whatsgabycooking.com/chicken-parmesan-pizza/", "recipe_id": "bf98a7", "image_url": "http://static.food2fork.com/ChickenParmesanPizza347d.jpg", "social_rank": 73.2532994368836, "publisher_url": "http://whatsgabycooking.com"}, {"publisher": "Fine Dining Lovers", "f2f_url": "http://food2fork.com/view/53864", "title": "Chicken Breast Wrapped in Bacon With Shallots", "source_url": "http://www.finedininglovers.com/recipes/main-course/chicken-breast-recipe-bacon/", "recipe_id": "53864", "image_url": "http://static.food2fork.com/s_2940_442203ad78.jpg", "social_rank": 72.20033827526566, "publisher_url": "http://www.finedininglovers.com"}]}

export default class Discover extends Component {
  static navigatorStyle = Utils.navigatorStyle()
  constructor(props) {
    super(props)

    console.log(realm.path)
    this.state = {
      isLoaded: false,
      cardIndex: 0,
    }
  }

  componentDidMount() {
     store.get('user')
      .then(result => {
        if (result.dateJoined) {
         console.log('user has already been set up')
        } else {
          this.setUpUser()
        }
      })
      .catch(error => {
        console.log(error)
         this.setUpUser()
      })

    var search_term = "dessert"
    var api_key = "5cfce9bc523ef350bbe08ddc83aebbd0"
    var url = "https://www.food2fork.com/api/search?key=" + api_key + "&q=" + search_term + "&page=1"

    fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      var cards = []

      console.log(responseJson)

      FIXED_RESPONSE.recipes.forEach(recipe => {
        cards.push({
          title: recipe.title,
          image_url: recipe.image_url.replace("http", "https"),
          source_url: recipe.source_url,
          social_rank: recipe.social_rank,
        })
      });

      // FIXED_RESPONSE.hits.forEach(hit => {
      //   var r = hit.recipe;
      //   var object = {
      //     title:r.label, 
      //     image_url:r.image,
      //     link:r.url,
      //     label:r.healthLabels, 
      //     calories: r.calories, 
      //     servings:r.yield, 
      //     ingredients: r.ingredientLines,
      //     blurRadius: 0
      //   };
      //   cards.push(object)
      // });

      console.log(cards)

      this.setState({cards: cards, isLoaded: true})
    })
    .catch((err) => {
      console.log(err.message)

    })
  }

  // blurCard(cardIndex) {
  //   var cards = this.state.cards
  //   // if (cards[cardIndex].blurRadius == 0) {
  //     cards[cardIndex].blurRadius = 50
  //   // } else {
  //   //   cards[cardIndex].blurRadius = 0
  //   // }
  //   this.setState({cards: cards})
  //   console.log(this.state.cards)
  //   this.forceUpdate()
  // }

  gotoOnboarding() {
    this.props.navigator.showModal({
        screen: 'app.Onboarding',
      })
  }

  setUpUser() {
    console.log('this is first time opening app. setting up')
    this.gotoOnboarding()
    store
      .update('user', {
        dateJoined: new Date(),
      })
      .catch(error => {
        console.log(error)
      })
  }

  openCard(cardIndex) {
    var card = this.state.cards[cardIndex]
    this.props.navigator.push({
      screen: 'app.ShowRecipe',
      title: "Recipe",
      passProps: {
        recipe: card,
        prevScreen: 'app.Discover'
      }
    })
  }

  saveCard(cardIndex) {
    var card = this.state.cards[cardIndex]
    realm.write(() => {
      realm.create('Recipe', {
        id: Utils.uuid(),
        dateCreated: new Date(),
        image_url: card.image_url,
        source_url: card.source_url,
        title: card.title,
        social_rank: card.social_rank,
      })
    })

    console.log('new recipe saved')
  }

  render () {
    return (
      <View style={GlobalStyles.container}>
        {!this.state.isLoaded ? null :
          <Swiper
              cards={this.state.cards}
              renderCard={(card) => {
                return (
                  <Card card={card} />
                )
              }}
              backgroundColor="#FFFCF0"
              onTapCard={(cardIndex) => this.openCard(cardIndex)}
              onSwipedRight={(cardIndex) => {this.saveCard(cardIndex)}}
              onSwipedAll={() => {console.log('onSwipedAll')}}
              cardIndex={this.state.cardIndex}
              stackSize={3}>
          </Swiper>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
})

module.exports = Discover