module.exports = {
    tagFormat: "${version}",
    repositoryUrl: "https://github.com/farsabbutt/design-system",
    branches: [
        "main",
        "+([0-9])?(.{+([0-9]),x}).x",
        { name: "beta", prerelease: true }
    ],
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        [
            "@semantic-release/changelog",
            {
                changelogFile: "CHANGELOG.md"
            }
        ],
        [
            "@semantic-release/npm",
            {
                "npmPublish": true,
            }
        ],
        "@semantic-release/github",
        [
            "@semantic-release/git",
            {
                assets: ["CHANGELOG.md", "package.json"],
                message: "release: ${nextRelease.version} \n\n${nextRelease.notes}"
            }
        ]
    ]
}
