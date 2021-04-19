/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          TabOne: {
            screens: {
              TabOneScreen: 'one',
            },
          },
          TabTwo: {
            screens: {
              TabTwoScreen: 'two',
            },
          },
          Home:{
            screen:{
              Home:'home'
            },
          },
          Carrinho:{
            screen:{
              Carrinho:'Carrinho'
            },
          },
          Perfil:{
            screen:{
              Perfil:'Perfil'
            },
          },
          Cadastro:{
            screen:{
              Cadastro:'Cadastro'
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
