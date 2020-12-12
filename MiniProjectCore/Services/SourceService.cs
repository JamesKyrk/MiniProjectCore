using MiniProjectCore.Data;
using MiniProjectCore.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MiniProjectCore.Services
{
    public class SourceService : ISourceService
    {
        private readonly MiniDbContext dbContext;

        public SourceService(MiniDbContext _dbContext)
        {
            dbContext = _dbContext;
        }

        public Source CreateSource(Source sourceOptions)
        {
            var source = new Source
            {
                Source_Code = sourceOptions.Source_Code,
                Source_Name = sourceOptions.Source_Name,
                Agent_Group = sourceOptions.Agent_Group,
                Commission = sourceOptions.Commission,
                Country_Id = sourceOptions.Country_Id,
                HBE = sourceOptions.HBE,
                Log_Source = sourceOptions.Log_Source,
                Source_Group = sourceOptions.Source_Group
            };

            dbContext.Sources.Add(source);
            dbContext.SaveChanges();
            return source;
        }

        public bool DeleteSource(int id)
        {
            var source = dbContext.Sources.Find(id);
            if (source == null) return false;
            dbContext.Remove(source);
            dbContext.SaveChanges();
            return true;
        }

        public List<Source> GetAllSources()
        {
            var sources = dbContext.Sources.ToList();
            return sources;
        }

        public Source GetSource(int id)
        {
            var source = dbContext.Sources.Find(id);
            return source;
        }

        public Source UpdateSource(int id, Source sourceOptions)
        {
            var source = dbContext.Sources.Find(id);
            source.Source_Code = sourceOptions.Source_Code;
            source.Source_Name = sourceOptions.Source_Name;
            source.Agent_Group = sourceOptions.Agent_Group;
            source.Commission = sourceOptions.Commission;
            source.Country_Id = sourceOptions.Country_Id;
            source.HBE = sourceOptions.HBE;
            source.Log_Source = sourceOptions.Log_Source;
            source.Source_Group = sourceOptions.Source_Group;

            dbContext.Sources.Update(source);
            dbContext.SaveChanges();
            return source;
        }
    }
}
