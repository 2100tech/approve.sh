<template>
  <div id="app" class="grid-container">
    <div class="header">
      <h1 class="header">Approve<span class="tint-color">.</span>sh</h1>
    </div>
    <Approvals class="approvals"
      :approvals="this.$store.approvals"
    />
    <Account class="account"
      :address="this.$store.account.address"
    />
    <div class="notification">
    </div>
    <div class="footer">
      <div class="footer-container">
        <h2 class="footer-content">🌛</h2>
      </div>
    </div>
    <vue-metamask 
      userMessage="approval.sh" 
      @onComplete="onMetaMaskLoadComplete"
    ></vue-metamask>
  </div>
</template>

<script>
import Approvals from './pages/Approvals.vue';
import Account from './pages/Account.vue';
import VueMetamask from 'vue-metamask';
import * as ApprovalService from '@/services/ApprovalService.js';
import Web3 from 'web3'

export default {
  name: 'App',
  components: {
    Approvals,
    Account,
    VueMetamask
  },
  methods: {
    async onMetaMaskLoadComplete(data) {
      let account = data.metaMaskAddress;
      let web3 = new Web3(data.web3.currentProvider);

      ApprovalService.initService(web3);
      let approvals = await ApprovalService.fetchAccountApprovals(account);
      
      this.$store.account.address = account;
      this.$store.web3 = web3;
      this.$store.approvals = approvals;
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin-top: 60px;
}
h1 {
  font-family: Impact, Haettenschweiler, "Franklin Gothic Bold", Charcoal, "Helvetica Inserat", "Bitstream Vera Sans Bold", "Arial Black", "sans serif";
  font-size: 48px;
  font-style: normal;
  font-variant: normal;
  font-weight: bold;
  line-height: 48px;
}
h2 {
  font-family: Impact, Haettenschweiler, "Franklin Gothic Bold", Charcoal, "Helvetica Inserat", "Bitstream Vera Sans Bold", "Arial Black", "sans serif";
  font-size: 24px;
  font-style: normal;
  font-variant: normal;
  font-weight: bold;
  line-height: 24px;
  color: #737372;
}
h3 {
  font-family: "Helvetica Neue", "sans serif";
  font-size: 21px;
  font-style: normal;
  font-variant: normal;
  font-weight: normal;
  line-height: 21px;
  color: #737372;
}
.tint-color {
  color: #EB39DC;
}
.header { 
  grid-area: header; 
  text-align: left;
}
.approvals { grid-area: approvals }
.account { grid-area: account }
.notification { grid-area: notification }
.footer {
  grid-area: footer;
}
.footer-container {
  display: block;
}
.footer-content {
  margin-top: 100px;
  display: inline-block;
  vertical-align: bottom;
  font-weight: bolder;
  font-size: 18px;
  line-height: 18px;
}
.grid-container {
  display: grid;
  grid-template-columns: 1fr 670px 60px 300px 1fr;
  grid-template-rows: 100px 1fr 1fr 200px;
  grid-template-areas:
    '. header header header .'
    '. approvals . account .'
    '. approvals . notification .'
    '. footer footer footer .';
  grid-gap: 10px;

}
</style>
