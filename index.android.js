/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  TouchableHighlight,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  WebView,
  Image,
  Linking
} from 'react-native';

var width = Dimensions.get('window').width;

export default class testapp extends Component {

  getHTML(){

    let HTML = `
      <html>
      <head>
      <script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js" ></script>
      <script type="text/javascript" src="https://service.iamport.kr/js/iamport.payment-1.1.2.js" ></script>
      <script type="text/javascript">

        $(document).ready(function(){

          var IMP = window.IMP;
          IMP.init('iamport');

          IMP.request_pay({
            pg : 'nice',
            merchant_uid : '`+ 'merchant_' + new Date().getTime() +`',
            name : '주문명:결제테스트',
            amount : 1000,
            buyer_email : 'aaa@aaa.com',
            buyer_name : '정주원',
            buyer_tel : '010-0000-0000',
            buyer_addr : '경기도 파주시',
            buyer_postcode : '123-456',
            m_redirect_url : 'http://planche.io/iamport.html',
            app_scheme : 'thegajago'
          }, function(rsp) {

          });
        });
      </script>
    </head>
    <body></body>
    </html>
    `;
    return HTML;
  }


  _onError(e) {

    console.log('_onError', e);
  }

  _onLoad(e) {

    console.log('_onLoad', e);
  }

  _onLoadStart(e) {

    console.log('_onLoadStart', e);
  }

  _onLoadEnd(e) {

    console.log('_onLoadEnd', e);
  }

  _onNavigationStateChange(e) {

    console.log('_onNavigationStateChange', e);
  }

  _onShouldStartLoadWithRequest = (ei) => {

    console.log('_onShouldStartLoadWithRequest', e);
    // Implement any custom loading logic here, don't forget to return!
    return true;
  };

  render() {

    return (
      <View style={styles.container}>
        <WebView
          source={{html : this.getHTML()}}
          onNavigationStateChange={this._onNavigationStateChange}
          onShouldStartLoadWithRequest={this._onShouldStartLoadWithRequest}
          onError={this._onError}
          onLoadEnd={this._onLoadEnd}
          onLoadStart={this._onLoadStart}
          onLoad={this._onLoad}
          style={{width:width, flex:1, borderWidth:1}}
        ></WebView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('testapp', () => testapp);
