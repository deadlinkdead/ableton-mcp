export default {
  startCommand: {
    type: "stdio",
    command: "poetry",
    args: ["run", "python", "-m", "MCP_Server.server"]
  }
}