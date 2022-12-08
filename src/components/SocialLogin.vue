<template>
	<h1>로그인</h1>
	<button @click="kakaoLogin()">카카오 로그인</button>
	<div>
		<div id="naver_id_login" @click="naverLogin()">
			<button>네이버 로그인</button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useKakao } from 'vue3-kakao-sdk';

const { kakao, initialize } = useKakao();

const kakaoLogin = async () => {
	await initialize();
	kakao.value.Auth.login({
		success(success) {
			console.log(success);
		},
		fail(err) {
			console.error(err);
		},
	});
};

const naverLogin = () => {
	console.log('naverLogin');
	const naver_id_login = new window.naver_id_login(
		'API KEY',
		'http://localhost:5173/login/naver',
	);
	const state = naver_id_login.getUniqState();
	naver_id_login.setState(state);
	naver_id_login.init_naver_id_login();
};
</script>

<style scoped></style>
