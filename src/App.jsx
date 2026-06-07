import "./App.css";
import Background from "./components/Background";
import Card from "./components/Card";

const App = () => {
	return (
		<>
			<Background />
			<h1 className="header">Games to try</h1>
			<div className="card-container">
				<Card
					title="Overwatch 2"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Overwatch_2_full_logo.svg/1280px-Overwatch_2_full_logo.svg.png"
					description="6v6 hero shooter"
					link="https://overwatch.blizzard.com/en-us/"
				/>
				<Card
					title="Valorant"
					src="https://images.steamusercontent.com/ugc/1009310639741043947/C4780FD7B53B39EFE4A536842FC1281A48A1256F/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
					description="5v5 tactical shooter"
					link="https://playvalorant.com/en-us/"
				/>
				<Card
					title="Spelunky 2"
					src="https://upload.wikimedia.org/wikipedia/en/5/5b/Spelunky_2_logo.jpg"
					description="Roguelike platformer"
					link="https://store.steampowered.com/app/418530/Spelunky_2/"
				/>
				<Card
					title="Slay the Spire 2"
					src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2868840/b0958d387dc366211e0f353443710cfcf9fdb020/header.jpg?t=1776735385"
					description="Roguelike deckbuilder"
					link="https://store.steampowered.com/app/2868840/Slay_the_Spire_2/"
				/>
				<Card
					title="Fruit Box"
					src="https://en.gamesaien.com/game/fruit_box/zu01.png"
					description="Relaxing web game"
					link="https://en.gamesaien.com/game/fruit_box/"
				/>
				<Card
					title="TETR.IO"
					src="https://tetr.io/res/tetrio_social.png"
					description="Multiplayer Tetris"
					link="https://tetr.io/"
				/>
				<Card
					title="Mahjong Soul"
					src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2739990/30f6fa7ca8ef3b0fc173072f1c1b6a5066346558/header.jpg?t=1778663504"
					description="Riichi Mahjong"
					link="https://mahjongsoul.yo-star.com/"
				/>
				<Card
					title="Baba Is You"
					src="https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/store/software/switch/70010000008551/be533f83694491bdc7cb34fa58cf1583f0d024bc163ca5ea15ec5738ff7eeccd"
					description="Puzzle game"
					link="https://store.steampowered.com/app/736260/Baba_Is_You/"
				/>
				<Card
					title="Bloons Tower Defense 6"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE28AanYVVXXj-D4geNwq-JSxDJhW7NmKwqvWiC2DNMg&s"
					description="Tower defense"
					link="https://ninjakiwi.com/Games/Mobile/Bloons-TD-6.html"
				/>
				<Card
					title="Minecraft"
					src="https://cms-assets.xboxservices.com/assets/53/6f/536f3aa5-424d-487a-a90c-957f93b32c17.jpg?n=Minecraft_Sneaky-Slider-1084_Ultimate-Collection_1600x675.jpg"
					description="3D sandbox"
					link="https://www.minecraft.net/en-us"
				/>
			</div>
		</>
	);
};

export default App;
