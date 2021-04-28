import { Component } from '@angular/core';
import { AdMobFree,AdMobFreeBannerConfig,AdMobFreeInterstitialConfig,AdMobFreeRewardVideoConfig } from "@ionic-native/admob-free/ngx";
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( private admobfree:AdMobFree) {}
  showBannerAd(){
    let bannerConfig:AdMobFreeBannerConfig={
      isTesting:true,
      autoShow:true
    };
    this.admobfree.banner.config(bannerConfig);
    this.admobfree.banner.prepare().then(()=>{

    }).catch(e=>alert(e))
  }
  showInterstitialAds()
  {
    let interstitialConfig:AdMobFreeInterstitialConfig={
      isTesting:true,
      autoShow:true
    };
    this.admobfree.interstitial.config(interstitialConfig);
    this.admobfree.interstitial.prepare().then(()=>{
    }).catch(e=>alert(e))
  }
  showRewardVideoAds()
  {
    let RewardVideoConfig:AdMobFreeRewardVideoConfig={
      isTesting:true,
      autoShow:true
    };
    this.admobfree.rewardVideo.config(RewardVideoConfig);
    this.admobfree.rewardVideo.prepare().then(()=>{
    }).catch(e=>alert(e))
  }
}
