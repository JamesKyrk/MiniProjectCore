using MiniProjectCore.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MiniProjectCore.Services
{
    public interface ISourceIdService
    {
        SourceId CreateSourceId(SourceId sourceIdOptions);
        SourceId GetSourceId(int id);
        List<SourceId> GetAllSourceIds();
        SourceId UpdateSourceId(int id, SourceId sourceIdOptions);
        bool DeleteSourceId(int id);
    }
}
