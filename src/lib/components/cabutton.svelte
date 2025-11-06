<script>
	let contractAddress = 'Ct2id7R3KwV6TG3fS5hSXGL668y3dcJKpTkX2xUApump';
	let copied = false;

	function copyCA() {
		navigator.clipboard.writeText(contractAddress);
		copied = true;
		setTimeout(() => (copied = false), 2000);
	}
</script>

<div class="flex w-full flex-col items-center justify-center gap-3 p-4 sm:flex-row">
	<div
		class="flex w-full cursor-pointer items-center gap-2 rounded-md border border-gray-700 px-3 py-2 transition-colors duration-300 sm:w-auto"
		class:bg-gray-800={!copied}
		class:bg-gray-700={copied}  
		on:click={copyCA}
	>
		<span class="text-sm whitespace-nowrap text-gray-400">CA:</span>

		<input
			type="text"
			readonly
			bind:value={contractAddress}
			class="w-full cursor-pointer bg-transparent text-gray-200 focus:outline-none"
		/>

		<!-- Teks Copied muncul di dalam container -->
		<span class="ml-2 text-sm font-semibold text-white">
			{#if copied}Copied!{/if}
		</span>
	</div>
</div>
