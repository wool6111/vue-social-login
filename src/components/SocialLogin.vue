<template>
	<h1>Naver</h1>
	<div>
		<div id="naver_id_login"></div>
	</div>
</template>

<script setup lang="ts">
const naver_id_login = new window.naver_id_login('Client Id', 'callback URL');
const state = naver_id_login.getUniqState();
naver_id_login.setButton('white', 2, 40); // 버튼 설정
naver_id_login.setState(state);
// naver_id_login.setPopup(); // popup 설정을 위한 코드
naver_id_login.init_naver_id_login();
</script>

<style scoped></style>
