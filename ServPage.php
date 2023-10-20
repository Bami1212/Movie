<?php
if(isset($_GET['id'])) {
  $video_id = $_GET['id'];

  // Make a request to the player.php script
  $request_url = "player.php?video_id=$video_id";
  $player_url = file_get_contents($request_url);

  if(!empty($player_url) && strpos($player_url, "https://") !== false) {
    header("Location: $player_url");
    exit();
  } else {
    echo "<span style='color:red'>$player_url</span>";
    exit();
  }
} else {
  echo "Missing video ID";
  exit();
}
?>