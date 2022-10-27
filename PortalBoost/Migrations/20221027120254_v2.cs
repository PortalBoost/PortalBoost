using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PortalBoost.Migrations
{
    public partial class v2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "User",
                columns: new[] { "ID", "Bio", "Email", "FirstName", "Hash", "LastName", "Salt", "UserName" },
                values: new object[] { 1, "", "", "John", "", "Doe", "", "user" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "User",
                keyColumn: "ID",
                keyValue: 1);
        }
    }
}
