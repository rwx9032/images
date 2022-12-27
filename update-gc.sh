echo "Removing old files..."
rm -rf Grasscutter.zip
rm -rf $(find -name "grasscutter*.jar" -type f)
rm -rf grasscutter.jar
echo "Updateing Grasscutter..."
wget -q --show-progress "https://nightly.link/Grasscutters/Grasscutter/workflows/build/development/Grasscutter.zip"
echo "unzipping..."
unzip -qq Grasscutter.zip
mv $(find -name "grasscutter*.jar" -type f) grasscutter.jar
echo "Removing temp files..."
rm -rf Grasscutter.zip
echo "Done"
