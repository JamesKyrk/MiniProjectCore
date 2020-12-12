using Microsoft.EntityFrameworkCore;
using MiniProjectCore.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MiniProjectCore.Data
{
    public class MiniDbContext : DbContext
    {
        public DbSet<SourceId> SourceIds { get; set; }
        public DbSet<Source> Sources { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
            => options.UseSqlite("Data Source=Data.db");
    }
}
