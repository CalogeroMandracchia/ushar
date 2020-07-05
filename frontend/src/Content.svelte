
<script>
	import { GET } from './libs.js';
	const [srcDownload, altDownload] = ['images/download.png', "download link"];
	
	const listFiles = (async () => {
		try {
			const files = await GET("http://localhost:3000/api/media/listFiles");
			console.log({files})
			return files;
		} catch(error) {
			console.log(error);
			throw error;
		}
	})();

	const onLiClick = async (name) => {
		try {
			const a = document.createElement('a')
			a.href = `http://localhost:3000/api/media/download/${name}`;
			a.download = name;
			document.body.appendChild(a);
			a.click();
			document.body.removeChild(a);
		} catch(error) {
			console.log(error);
			throw error;
		}
	};

</script>

<div class="container">
	<div class="dummy"></div>
	<div class="main">
		<ul>
			{#await listFiles}
				<p>...loading files</p>
			{:then listFiles}
				{#each listFiles as filename, i }
					<li on:click={() => onLiClick(filename)}>
						{i + 1}: {filename}
						<img src={srcDownload} alt={altDownload}>
					</li>
				{/each}
			{:catch error}
				<p style="color: red">{error.message}</p>
			{/await}
		</ul>
	</div>
	<div class="dummy"></div>
</div>


<style>
@import url('https://fonts.googleapis.com/css2?family=Inconsolata&display=swap');
.container {
	display: flex;
	width: 100%;
	font-family: 'Inconsolata', monospace;
}

.container .dummy {
	flex: 2;
}

.main {
	flex: 8;
	font-size: 1rem;
}

.main ul {
	list-style-type: none;
	padding: 0;
	margin: 0;
}

.main li {
	display: flex;
	align-items: center;
	border-bottom: 1px solid rgb(190, 186, 186);
	padding: 1rem;
}

.main li img {
  visibility: hidden;
	width: 1.5rem;
	height: 1.5rem;
	margin-left: auto;
	transition: background-color 0.3s ease;
}

.main li:last-child {
  border: none;
}

.main li {
  text-decoration: none;
  color: #000;
  transition: font-size 0.3s ease, background-color 0.3s ease;
}
 
.main li:hover {
	cursor: pointer;
}

.main li:hover {
	color: #5f5b4d;
	font-size: 1.3rem;
	font-weight: bold;
	color: #5f5b4d;
}

.main li:hover img {
  visibility: visible;
}

</style>