<template>
	<h1>로그인</h1>
	<button @click="test()">카카오 로그인</button>
	<button>네이버 로그인</button>
</template>

<script setup lang="ts">
import { useKakao } from 'vue3-kakao-sdk';

const { kakao, initialize } = useKakao();

const test = async () => {
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
</script>

<style scoped></style>
