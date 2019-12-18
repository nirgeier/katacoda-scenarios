const
  os = require('os'),
  del = require('del'),
  fs = require('fs-extra'),
  path = require('path');

/**

 * @param {*} baseFolder 
 */
const

  // the folder with the scenarios 
  SCENARIOS_FOLDER = `${__dirname}/`,

  // Split camel case string
  splitCamelCase = str => str.replace(/([a-z])-?([A-Z])/g, '$1 $2'),

  // Get directories inside given folder
  getDirectories = source =>
    fs.readdirSync(source, { withFileTypes: true })
      .filter(content => content.isDirectory())
      .map(dir => dir.name);

/**
 * Find all files inside a dir, recursively.
 * @function getAllFiles
 * @param  {string} baseFolder Base folder for the traversing.
 * @return {string[]} Array with all file names that are inside the directory.
 */
function getScenarioSteps(baseFolder) {
  console.log(`Processing ${baseFolder}`);

  fs.readdirSync(baseFolder)
    .forEach((item) => {
      // Get the full path of the folder
      let name = path.join(baseFolder, item);
      // Check to see if its an directory
      let isDirectory = fs.statSync(name).isDirectory();
      isDirectory && buildScenarioSteps(name);
    });
}

/**
 * Build the sc
 */
function buildScenarioSteps(scenarioFolder) {

  let stepsFolder = path.join(scenarioFolder, 'steps');
  // Check to see if this folder is scenario folder
  fs.exists(stepsFolder, () => {

    console.log(`${os.EOL}Building: ${scenarioFolder}`);

    // Process the files inside this folder
    let steps = fs.readdirSync(stepsFolder)
      // Filter out the steps folders
      .filter((item) => {
        return item.indexOf('step') === 0;
      });

    console.log(`  Updating steps: ${JSON.stringify(steps, null, 2)}`);

    // Generate the required output
    let content = steps.map((step) => {
      // Get the file description without the delimiters and the file name
      let tokens = step.split('.md')[0].split('-');
      return {
        // Remove the _ from the file name
        title: tokens[1].split('_').join(' '),
        text: `steps/${step}`
      };
    });

    // Write the steps folder to the index.json file in the scenario folder
    let indexFile = fs.readFileSync(path.join(scenarioFolder, 'index.json'), "UTF-8");
    // Update the steps content
    indexFile = JSON.parse(indexFile);
    indexFile.details.steps = content;

    // Update the file on disk
    fs.writeFile(path.join(scenarioFolder, 'index.json'), JSON.stringify(indexFile, null, 2));
  })
}

/**
 * Build the sc
 */
async function buildPathways(scenarioFolder) {

  // Clean old files
  await del(`*-pathway*.json`);

  // Load the diffrent courses
  let pathways = getDirectories(SCENARIOS_FOLDER);

  // Loop over the courses and build the patways
  pathways.forEach((pathway) => {

    // read the folders in each patway and add them to the course list
    let courses =
      getDirectories(`${SCENARIOS_FOLDER}/${pathway}`)
        .map(course => {
          return {
            "course_id": course,
            "title": course,
            "description": course
          }
        });

    // Build the pathway data
    let data = {
      "title": splitCamelCase(pathway),
      "description": splitCamelCase(pathway),
      "courses": courses
    };

    // Write the pathway file
    console.log(`Writing: ${pathway}-pathway.json`);
    fs.writeFile(`${SCENARIOS_FOLDER}/${pathway}-pathway.json`, JSON.stringify(data, null, 4));

    // Build the course content
    getDirectories(`${SCENARIOS_FOLDER}/${pathway}`)
      .forEach(async course => {
        // for each course build its data
        buildScenarioSteps(`${SCENARIOS_FOLDER}/${pathway}/${course}`);
      });

  });

}

// Loop over the docker folder
fs.readdir(__dirname, (err, files) => {
  console.log(fs.lstatSync(files[0]).isDirectory());
})

//buildScenarioSteps(path.join(__dirname, 'DockerFundamentals/01-Docker-basics'));
//buildScenarioSteps(path.join(__dirname, 'DockerFundamentals/02-Docker-FileSystem'));
buildScenarioSteps(path.join(__dirname, '../KubernetesFundamentals/01-Kubernetes-100'));
//buildPathways();
